import React, { FunctionComponent } from "react";
import { Product, ProductListViewType } from "../../types";
import Image from "next/image";
import styles from "./ProductList.module.scss";

export const ProductListView: FunctionComponent<ProductListViewType> = ({
  cart,
  handleClick,
  products,
}) => {
  return (
    <div className={styles.productList}>
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
