import { ChangeEvent } from "react";

import InputText from "../components/global/input/InputText";

const Home = () => {
  const checkValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <section>
        <div
          className="relative h-[26rem] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/images/landing-page.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container relative top-1/2 z-10 flex w-full -translate-y-1/2 flex-col gap-2 text-white">
            <h1 className="text-6xl font-bold">RoomRent</h1>
            <p className="text-2xl font-medium">
              Simpliying the way you find and rent your perfect space
            </p>
          </div>

          <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 flex-col gap-2 rounded-md bg-white p-4 shadow">
            <span>Pick your options</span>
            <div className="flex flex-row items-center gap-4">
              <InputText
                name="Testing1"
                label="Testing1"
                required
                validationText="Testing1"
                placeholder="Testing1"
                updateValue={checkValue}
              />
              <InputText
                name="Testing2"
                label="Testing2"
                validationText="Testing2"
                placeholder="Testing2"
                disabled
              />
              <InputText
                name="Testing3"
                label="Testing3"
                required
                validationText="Testing3"
                placeholder="Testing3"
                disabled
              />
            </div>
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
