import { TabType } from "../../../types/global-type";

const Tab = ({ items, activeTab, updateValue }: TabType) => {
  const returnActiveTab = (val: TabType["items"][number]) => {
    if (!val.disabled) {
      updateValue(val.value);
    }
  };

  return (
    <div className="flex w-full flex-row flex-wrap items-center gap-10 border-b border-light">
      {items.map((val) => (
        <div
          key={val.value}
          className={`relative pb-2 ${val.disabled ? "cursor-not-allowed text-neutral-500" : "group cursor-pointer"}`}
          onClick={() => returnActiveTab(val)}
        >
          <span
            className={`text-lg font-bold transition-all duration-300 ${activeTab === val.value ? "text-primary" : "text-neutral-300 group-hover:text-primary"}`}
          >
            {val.label}
          </span>
          <div
            className={`absolute -bottom-0.5 left-0 w-0 border-b-4 transition-all duration-300 ${activeTab === val.value ? "w-full border-primary" : "group-hover:w-full group-hover:border-primary"}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Tab;
