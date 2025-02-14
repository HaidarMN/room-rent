import { create } from "zustand";
import {
  CityType,
  DefaultResponseType,
  RoomSizeType,
  RoomTypeType,
} from "../types/master-data.type";
import useAxios from "../plugins/axios";

type State = {
  roomTypeList: RoomTypeType[];
  cityList: CityType[];
  roomSizeList: RoomSizeType[];
};

type Action = {
  getRoomType: () => void;
  getCity: () => void;
  getRoomSize: () => void;
};

const useMasterDataStore = create<State & Action>((set, get) => ({
  roomTypeList: [],
  cityList: [],
  roomSizeList: [],
  getRoomType: async () => {
    try {
      const { roomTypeList } = get();

      if (roomTypeList.length === 0) {
        const response: DefaultResponseType<RoomTypeType[]> =
          await useAxios.get("/room-type");

        set(() => ({ roomTypeList: response.data }));
      }
    } catch (error) {
      console.error(error);
    }
  },
  getCity: async () => {
    try {
      const { cityList } = get();

      if (cityList.length === 0) {
        const response: DefaultResponseType<CityType[]> =
          await useAxios.get("/city");

        set(() => ({ cityList: response.data }));
      }
    } catch (error) {
      console.error(error);
    }
  },
  getRoomSize: async () => {
    try {
      const { roomSizeList } = get();

      if (roomSizeList.length === 0) {
        const response: DefaultResponseType<RoomSizeType[]> =
          await useAxios.get("/room-size");

        set(() => ({ roomSizeList: response.data }));
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useMasterDataStore;
