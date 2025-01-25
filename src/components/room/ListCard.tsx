import { Icon } from "@iconify/react/dist/iconify.js";
import { ListCardType } from "../../types/room-type";

import useFormatCurrency from "../../helpers/functions/useFormatCurrency";
import { Link } from "react-router";

const ListCard = ({
  uid,
  name,
  image,
  price,
  description,
  location,
  size,
}: ListCardType) => {
  return (
    <div className="flex h-full w-64 flex-col rounded-lg bg-white shadow-md md:w-72 xl:w-80">
      <Link to={`/listings/${uid}`}>
        <img
          src={image}
          alt={name}
          className="size-64 rounded-t-lg object-cover object-center md:size-72 xl:size-80"
        />
      </Link>

      <div className="flex flex-col justify-end gap-2 p-4">
        <div className="line-clamp-2 h-14 text-xl font-bold">
          <Link to={`/listings/${uid}`} title={name}>
            {name}
          </Link>
        </div>
        <p className="line-clamp-2" title={description}>
          {description}
        </p>

        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
          <div className="flex flex-row items-center gap-2 text-sm font-medium text-neutral-400">
            <Icon icon="material-symbols:location-on-rounded" />
            {location}
          </div>
          <div className="flex flex-row items-center gap-2 text-sm font-medium text-neutral-400">
            <Icon icon="ic:baseline-people-alt" />
            {size} people
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-end gap-1 p-4 pt-0">
        <span
          className={`font-semibold ${price.has_discount ? "text-accent" : "text-primary"}`}
        >
          <span className="text-sm text-neutral-400">from </span>
          IDR{" "}
          <strong className="text-2xl">
            {useFormatCurrency(price.total_price)}
          </strong>{" "}
          / hour
        </span>
        {price.has_discount && (
          <span className="font-bold text-neutral-400">
            IDR{" "}
            <span className="line-through">
              {useFormatCurrency(price.base_price)}
            </span>{" "}
            / hour
          </span>
        )}
      </div>
    </div>
  );
};

export default ListCard;
