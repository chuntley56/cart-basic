import { Product } from "../types";

export const products: Product[] = [
  {
    sku: "ESB-3Z-CURRENT",
    name: "Shave Butter",
    price: 3.5,
    size: {
      unitOfMeasurement: "oz",
      value: 3,
    },
  },
  {
    sku: "DSL-6Z-CURRENT",
    name: "Prep Scrub",
    price: 7.5,
    size: {
      unitOfMeasurement: "oz",
      value: 6,
    },
  },
  {
    sku: "BC-DFM-1Z-CURRENT",
    name: "Face Moisturizer",
    price: 6,
    size: {
      unitOfMeasurement: "oz",
      value: 1,
    },
  },
];
