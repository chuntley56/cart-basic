export type Product = {
  sku: string;
  name: string;
  price: number;
  size: {
    unitOfMeasurement: string;
    value: number;
  };
};
