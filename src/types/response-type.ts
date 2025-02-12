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
