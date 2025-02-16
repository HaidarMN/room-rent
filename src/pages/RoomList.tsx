// Helper
import { useEffect, useState } from "react";

import InputText from "../components/global/input/InputText";
import InputSelect from "../components/global/input/InputSelect";
import Button from "../components/global/button";
import ListCard from "../components/room/ListCard";

import useMasterDataStore from "../stores/master-data.store";

import { dataRoom } from "../helpers/data";

const RoomList = () => {
   const { cityList, roomSizeList, getCity, getRoomSize } =
     useMasterDataStore();

  const [searchPayload, setSearchPayload] = useState({
    location: "",
    size: 1,
    city: 0,
  });

   const submit = () => {
     alert(JSON.stringify(searchPayload));
   };

    useEffect(() => {
      getCity();
      getRoomSize();
    }, []);

  return (
    <section className="container flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <InputText
          name="name"
          placeholder="Location name"
          icon="material-symbols:search"
          className="60"
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
          className="52"
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
          className="52"
          initialValue={searchPayload.city}
          updateValue={(val) =>
            setSearchPayload((prevValue) => ({
              ...prevValue,
              city: Number(val),
            }))
          }
        />
        <Button className="" onClick={submit}>
          Search Now
        </Button>
      </div>
      <div className="grid grid-cols-1 justify-center gap-8 py-8 md:grid-cols-2 xl:grid-cols-4">
        {dataRoom.map((item) => (
          <ListCard
            key={item.uid}
            uid={item.uid}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            location={item.location}
            size={item.size}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
