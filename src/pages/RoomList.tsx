import { useEffect, useState } from "react";
import useAxios from "../plugins/axios";

import InputText from "../components/global/input/InputText";
import InputSelect from "../components/global/input/InputSelect";
import Button from "../components/global/button";
import ListCard from "../components/room/ListCard";
import Pagination from "../components/global/pagination";

import useMasterDataStore from "../stores/master-data.store";

import { DefaultResponsePaginationType } from "../types/api.type";
import { RoomListType } from "../types/general.type";

const RoomList = () => {
  const { cityList, roomSizeList, getCity, getRoomSize } = useMasterDataStore();

  const [searchPayload, setSearchPayload] = useState({
    location: "",
    size: 1,
    city: null as number | null,
    page: 1,
    page_size: 10,
  });

  const [roomList, setRoomList] = useState<
    DefaultResponsePaginationType<RoomListType[]>
  >({
    data: [],
    meta: {
      page: 1,
      page_size: 1,
      count: 1,
      page_count: 1,
    },
  });

  const getRoom = async () => {
    try {
      const response: DefaultResponsePaginationType<RoomListType[]> =
        await useAxios.get("/room", {
          params: searchPayload,
        });

      setRoomList(response);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = async () => {
    await getRoom();
  };

  const changePage = async (val: number) => {
    setSearchPayload((prevValue) => ({
      ...prevValue,
      page: val,
    }));
  };

  const changePageSize = async (val: number) => {
    setSearchPayload((prevValue) => ({
      ...prevValue,
      page: 1,
      page_size: val,
    }));
  };

  useEffect(() => {
    getCity();
    getRoomSize();
  }, []);

  useEffect(() => {
    getRoom();
  }, [searchPayload]);

  return (
    <section className="container flex flex-col gap-4 py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <InputText
          name="name"
          placeholder="Location name"
          icon="material-symbols:search"
          initialValue={searchPayload.location}
          updateValue={(val) =>
            setSearchPayload((prevValue) => ({
              ...prevValue,
              location: val,
            }))
          }
        />
        <InputSelect
          name="size"
          placeholder="Size"
          options={roomSizeList.map((item) => ({
            value: item.id,
            label: item.quota,
          }))}
          icon="ic:baseline-people-alt"
          initialValue={searchPayload.size}
          updateValue={(val) =>
            setSearchPayload((prevValue) => ({
              ...prevValue,
              size: Number(val),
            }))
          }
        />
        <InputSelect
          name="city"
          placeholder="City"
          options={cityList.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
          icon="material-symbols:location-on-rounded"
          initialValue={searchPayload.city || 0}
          updateValue={(val) =>
            setSearchPayload((prevValue) => ({
              ...prevValue,
              city: Number(val),
            }))
          }
        />
        <Button onClick={submit}>Search Now</Button>
      </div>
      <div className="grid grid-cols-1 justify-center gap-4 py-8 md:grid-cols-2 xl:grid-cols-3">
        {roomList.data.map((item) => (
          <ListCard
            key={item.id}
            uid={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            location={item.city.name}
            size={item.quota}
          />
        ))}
      </div>
      <Pagination
        page={searchPayload.page}
        pageSize={searchPayload.page_size}
        totalPage={roomList.meta.page_count}
        changePage={changePage}
        changePageSize={changePageSize}
      />
    </section>
  );
};

export default RoomList;
