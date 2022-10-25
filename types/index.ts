export type Cart = {
  sku: string;
  quantity: number;
}[];

export type NavType = {
  cart: Cart;
};

export type Product = {
  sku: string;
  name: string;
  price: number;
  size: {
    unitOfMeasurement: string;
    value: number;
  };
};
