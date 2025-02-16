export type FaqType = {
  id: number;
  question: string;
  answer: string;
};

export type RoomListType = {
  id: string;
  name: string;
  description: string;
  image: string;
  quota: string;
  price: {
    base_price: number;
    has_discount: boolean;
    discount_percent: number;
    total_price: number;
  };
  city: {
    id: number;
    name: string;
  };
};
