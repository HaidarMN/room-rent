import { useState } from "react";

// Components
import Button from "../../global/button";
import InputSelect from "../../global/input/InputSelect";
import InputText from "../../global/input/InputText";
import { Icon } from "@iconify/react/dist/iconify.js";

const HomeHeader = () => {
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

  return (
    <>
      <div className="relative flex h-[30rem] w-full flex-col">
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('./src/assets/images/landing-page.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container relative top-1/2 z-10 flex w-full -translate-y-1/2 flex-col gap-2 text-white">
            <h1 className="font-oswald text-4xl font-bold md:text-6xl">
              RoomRent
            </h1>
            <p className="text-base font-medium md:text-xl xl:text-2xl">
              Simpliying the way you find and rent your perfect space
            </p>
          </div>
        </div>

        <div className="flex w-full flex-row items-center gap-4 rounded-b-3xl bg-white p-4 shadow-md xl:absolute xl:-bottom-10 xl:left-1/2 xl:w-fit xl:-translate-x-1/2 xl:rounded-full">
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
      </div>
    </>
  );
};

export default HomeHeader;
