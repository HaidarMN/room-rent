import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AccordionType } from "../../../types/global-type";

const Accordion = ({ data }: AccordionType) => {
  const [expand, setExpand] = useState<string | number | null>();

  const openAccordion = (value: string | number) => {
    if (expand === value) {
      setExpand(null);
    } else {
      setExpand(value);
    }
  };

  return (
    <div className="w-full divide-y divide-neutral-200">
      {data.map((item) => (
        <div key={item.id}>
          <button
            className="flex w-full flex-row items-center justify-between gap-4 py-4 text-left"
            onClick={() => openAccordion(item.id)}
          >
            <span className="text-xl font-semibold">{item.title}</span>
            <Icon
              icon="tabler:chevron-down"
              className={`text-2xl transition-all duration-300 ${expand === item.id ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ${expand === item.id ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="pb-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
