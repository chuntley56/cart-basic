import React, { useState } from "react";
import { products } from "../../fixtures/products";
import { ProductListView } from "./ProductList.view";
import { Cart } from "../../types";

export const ProductList = () => {
  const [cart, setCart] = useState<Cart>([]);

  const handleClick = (isInCart: boolean, sku: string) => {
    if (!isInCart) {
      setCart((cart) => [...cart, { sku, quantity: 1 }]);
    } else {
      setCart(cart.filter((e) => e.sku !== sku));
    }
  };

  return (
    <ProductListView
      cart={cart}
      handleClick={handleClick}
      products={products}
    />
  );
};
