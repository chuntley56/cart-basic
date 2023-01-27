import React, { FunctionComponent } from "react";
import { products } from "../../fixtures/products";
import { ProductListView } from "./ProductList.view";
import { ProductListType } from "../../types";

export const ProductList: FunctionComponent<ProductListType> = ({
  cart,
  handleClick,
}) => {
  return (
    <ProductListView
      cart={cart}
      handleClick={handleClick}
      products={products}
    />
  );
};
