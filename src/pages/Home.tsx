import { useState } from "react";

// Components
import Button from "../components/global/button";
import InputSelect from "../components/global/input/InputSelect";
import InputText from "../components/global/input/InputText";

const Home = () => {
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

  const submit = () => {
    alert(JSON.stringify(searchPayload));
  };

  return (
    <>
      <section>
        <div
          className="relative h-[30rem] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('./src/assets/images/landing-page.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container relative top-1/2 z-10 flex w-full -translate-y-1/2 flex-col gap-2 text-white">
            <h1 className="text-6xl font-bold">RoomRent</h1>
            <p className="text-2xl font-medium">
              Simpliying the way you find and rent your perfect space
            </p>
          </div>

          <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 flex-row items-center gap-2 rounded-full bg-white p-4 shadow">
            <InputText
              name="name"
              placeholder="Location name"
              className="w-60"
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
              className="w-60"
              icon="ic:baseline-people-alt"
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
              className="w-60"
              icon="ic:baseline-people-alt"
              rounded
              initialValue={searchPayload.city}
              updateValue={(val) =>
                setSearchPayload((prevValue) => ({
                  ...prevValue,
                  city: String(val),
                }))
              }
            />
            <Button rounded onClick={submit}>
              Find
            </Button>
          </div>
        </div>
      </section>

      <section className="min-h-screen pt-32">
        <h1>ini page 2</h1>
      </section>
    </>
  );
};

export default Home;
