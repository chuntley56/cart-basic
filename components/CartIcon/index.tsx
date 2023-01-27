import React, { FunctionComponent } from "react";
import { Cart } from "../../types";
import cartIcon from "/public/cartIcon.svg";
import Image from "next/image";

export type CartIconType = {
  cart: Cart;
};

const CartIcon: FunctionComponent = () => {
  return <Image alt="cart icon" src={cartIcon} height={50} width={50} />;
};

export default CartIcon;
