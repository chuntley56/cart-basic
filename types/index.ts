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

export type ProductListType = {
  cart: Cart;
  handleClick: (isInCart: boolean, sku: string) => void;
};

export type ProductListViewType = {
  cart: Cart;
  handleClick: (isInCart: boolean, sku: string) => void;
  products: Product[];
};
