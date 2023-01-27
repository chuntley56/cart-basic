import React, { FunctionComponent } from "react";
import { NavType } from "../../types";
import Image from "next/image";
import CartIcon from "../CartIcon";

export const Nav: FunctionComponent<NavType> = ({ cart }) => {
  return (
    <div
      style={{
        backgroundColor: "#001233",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ margin: "30px 20px" }}>
        <Image
          alt="logo"
          height={56}
          width={231}
          src="https://face-assets.dollarshaveclub.com/images/ui-elements/app-header/logo-horizontal-for-dark-background.svg"
        />
      </div>
      <div>
        <CartIcon />
      </div>
    </div>
  );
};
