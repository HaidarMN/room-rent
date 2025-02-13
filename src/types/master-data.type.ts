export type DefaultResponseType<T = any> = {
  data: T;
};

export type RoomTypeType = {
  id: number;
  name: string;
  description: string;
  image: string;
  total_location: number;
  quota: string;
};

export type CityType = {
  id: number;
  name: string;
};

export type RoomSizeType = {
  id: number;
  quota: string;
};
