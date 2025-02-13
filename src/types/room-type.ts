export type ListCardType = {
  uid: string;
  name: string;
  image: string;
  price: {
    base_price: number;
    has_discount: boolean;
    discount_percent: number;
    total_price: number;
  };
  description: string;
  location: string;
  size: string;
};
