import React, { useState } from "react";
import InputText from "../components/global/input/InputText";
import InputSelect from "../components/global/input/InputSelect";
import Button from "../components/global/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const rooms = [
  {
    id: 1,
    title: "Premium Conference Room",
    type: "Conference",
    price: 500000,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    id: 2,
    title: "Modern Boardroom",
    type: "Boardroom",
    price: 750000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    title: "Cozy Private Office",
    type: "Private Office",
    price: 300000,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  },
];

const RoomList = () => {
  const optionsSize = [
    { value: 1, label: "1 orang" },
    { value: 2, label: "2 orang" },
    { value: 3, label: "3 orang" },
  ];

  const optionsCity = [
    { value: "malang", label: "Malang" },
    { value: "surabya", label: "Surabya" },
  ];

  const [searchPayload, setSearchPayload] = useState({
    location: "",
    size: 1,
    city: "",
  });
  const [isSearchClick, setIsSearchClick] = useState<boolean>(false);

  const clickSearch = () => {
    setIsSearchClick(!isSearchClick);
  };

  const submit = () => {
    alert(JSON.stringify(searchPayload));
  };

  const reserve = () => {
    alert("Room Reserved");
  };

  return (
    <>
      <div className="flex w-full flex-row items-center justify-center gap-4 rounded-b-3xl bg-white p-4 shadow-md">
        <button
          className="flex w-full flex-row items-center justify-between rounded-full border border-neutral-200 py-3 pl-6 pr-2 xl:hidden"
          onClick={clickSearch}
        >
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm">Search your perfect space</span>
            <span className="text-xs font-medium text-neutral-500">
              location - size - city
            </span>
          </div>

          <div className="rounded-full bg-primary px-2 py-2 text-3xl text-white">
            <Icon icon="material-symbols:search" />
          </div>
        </button>

        <div className="hidden flex-row items-center gap-2 xl:flex">
          <InputText
            name="name"
            placeholder="Location name"
            icon="material-symbols:search"
            className="w-60"
            rounded
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
            options={optionsSize}
            icon="ic:baseline-people-alt"
            className="w-52"
            rounded
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
            options={optionsCity}
            icon="material-symbols:location-on-rounded"
            className="w-52"
            rounded
            initialValue={searchPayload.city}
            updateValue={(val) =>
              setSearchPayload((prevValue) => ({
                ...prevValue,
                city: String(val),
              }))
            }
          />
          <Button className="" rounded onClick={submit}>
            Search Now
          </Button>
        </div>
      </div>

      {isSearchClick && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 transition-all duration-300 xl:hidden"
          onClick={clickSearch}
        ></div>
      )}

      <div
        className={`fixed bottom-0 left-0 z-20 flex w-full flex-col justify-between gap-2 rounded-t-3xl bg-white p-4 transition-all xl:translate-y-full ${!isSearchClick && "translate-y-full"}`}
      >
        <InputText
          name="name"
          placeholder="Location name"
          icon="material-symbols:search"
          rounded
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
          options={optionsSize}
          icon="ic:baseline-people-alt"
          rounded
          menuPlacement="top"
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
          options={optionsCity}
          icon="material-symbols:location-on-rounded"
          rounded
          menuPlacement="top"
          initialValue={searchPayload.city}
          updateValue={(val) =>
            setSearchPayload((prevValue) => ({
              ...prevValue,
              city: String(val),
            }))
          }
        />
        <Button rounded onClick={submit}>
          Search Now
        </Button>
      </div>

      <div className="mb-20 mt-10 flex flex-col items-center gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="flex w-full max-w-screen-lg flex-col gap-2 rounded-lg bg-white p-4 shadow-md"
          >
            <img
              src={room.image}
              alt={room.title}
              className="h-60 w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">{room.title}</h1>
              <span className="text-sm text-neutral-500">{room.type}</span>
              <span className="text-lg font-semibold text-primary">
                Rp. {room.price.toLocaleString()}
              </span>
              <Button className="" rounded onClick={reserve}>
                Reserve Room
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomList;
