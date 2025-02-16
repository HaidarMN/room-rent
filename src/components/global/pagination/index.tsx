import InputSelect from "../input/InputSelect";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PaginationType } from "../../../types/global-type";

const Pagination = ({
  page,
  pageSize,
  totalPage,
  changePage,
  changePageSize,
}: PaginationType) => {
  const pageSizeOptions = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  const previousPage = () => {
    if (page > 1) {
      changePage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPage) {
      changePage(page + 1);
    }
  };

  return (
    <div className="flex w-full flex-row items-center justify-between gap-4">
      <div>
        <InputSelect
          name="select-page-size"
          className="w-20"
          options={pageSizeOptions}
          initialValue={pageSize}
          updateValue={(val) => changePageSize(Number(val))}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <Icon
          icon="material-symbols:chevron-left-rounded"
          className={`text-2xl ${
            page === 1
              ? "cursor-not-allowed text-neutral-200"
              : "cursor-pointer text-black"
          }`}
          onClick={previousPage}
        />
        <div className="flex flex-row items-center gap-2">
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((item) => (
            <div key={item}>
              {item === 1 ||
              item === totalPage ||
              (item >= page - 1 && item <= page + 1) ? (
                <div
                  className={`cursor-pointer rounded-md px-4 py-2 font-medium ${page === item ? "bg-primary text-white" : "bg-neutral-200 text-neutral-600"}`}
                  onClick={() => changePage(item)}
                >
                  {item}
                </div>
              ) : (
                <span>...</span>
              )}
            </div>
          ))}
        </div>
        <Icon
          icon="material-symbols:chevron-right-rounded"
          className={`text-2xl ${
            page === totalPage
              ? "cursor-not-allowed text-neutral-200"
              : "cursor-pointer text-black"
          }`}
          onClick={nextPage}
        />
      </div>
    </div>
  );
};
export default Pagination;
