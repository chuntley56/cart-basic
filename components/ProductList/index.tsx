import React, { FunctionComponent, useState } from "react";
import { Cart, Product } from "../../types";
import Image from "next/image";
import styles from "./index.module.scss";

export type ProductListType = {
  cart: Cart;
  handleClick: (isInCart: boolean, sku: string) => void;
  products: Product[];
};

export const ProductList: FunctionComponent<ProductListType> = ({
  cart,
  handleClick,
  products,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {products.map((product: Product, i) => {
        const { name, price, sku } = product;
        const isInCart = cart.findIndex((e) => e.sku === sku) !== -1 ?? false;

        return (
          <div key={i} className={styles.productCard}>
            <Image
              alt={name}
              height={200}
              width={200}
              src={`https://dsc-assets.imgix.net/images/product-images/product-tile/${sku}.png`}
            />
            <h3>{name}</h3>
            <div>
              <button
                onClick={() => handleClick(isInCart, sku)}
                className={
                  isInCart ? styles.buttonInactive : styles.buttonActive
                }
              >
                {isInCart ? "Remove from cart" : `Add $${price}`}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
