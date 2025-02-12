import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";
import Tab from "../../global/tab";
import Button from "../../global/button";
import useAxios from "../../../plugins/axios";
import {
  DefaultResponseType,
  RoomTypeType,
} from "../../../types/response-type";

const SpaceType = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedSpace, setSelectedSpace] = useState<RoomTypeType>();

  const [data, setData] = useState<RoomTypeType[]>([]);

  const findSelectedSpace = useCallback(() => {
    const selectedData = data.find((item) => item.id === activeTab);

    setSelectedSpace(selectedData);
  }, [data, activeTab]);

  const getData = async () => {
    try {
      const response: DefaultResponseType<RoomTypeType[]> =
        await useAxios.get("/room-type");

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    findSelectedSpace();
  }, [findSelectedSpace]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="title text-center">What Space Are We Looking For?</h1>

      <div className="container flex flex-col gap-8">
        <Tab
          items={data?.map((item) => ({ value: item.id, label: item.name }))}
          activeTab={activeTab}
          updateValue={(val) => setActiveTab(Number(val))}
        />

        <div className="flex w-full flex-col-reverse items-center justify-between gap-8 xl:flex-row xl:gap-4">
          <div className="flex w-full flex-col items-center gap-4 md:gap-6 xl:w-1/2">
            <div className="grid w-full grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              <div className="flex flex-row items-center gap-2">
                <Icon icon="ic:baseline-people-alt" />
                <span>{selectedSpace?.quota} people</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Icon icon="material-symbols:location-on-rounded" />
                <span>{selectedSpace?.total_location} locations</span>
              </div>
            </div>

            <p>{selectedSpace?.description}</p>

            <Button
              onClick={() => navigate(`list?room-type=${selectedSpace?.id}`)}
              rounded
              className="xl:w-fit"
            >
              Go to this space
            </Button>
          </div>

          <img
            src={selectedSpace?.image}
            alt={selectedSpace?.name}
            className="size-96 max-w-full rounded-lg bg-light object-cover object-center xl:max-w-[50%]"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default SpaceType;
