// Helper
import { dataRoom } from "../helpers/data";

import InputText from "../components/global/input/InputText";
import InputSelect from "../components/global/input/InputSelect";
import Button from "../components/global/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import ListCard from "../components/room/ListCard";
import { useState } from "react";

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

  return (
    <section className="container flex-col flex gap-4">
      <div className="flex-row flex items-center justify-between">
        <h1>hahaha</h1>
        <h1>hahaha</h1>
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
