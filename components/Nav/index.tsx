import React, { FunctionComponent } from "react";
//import { NavType } from "../../types";
import Image from "next/image";
import CartIcon from "../CartIcon";
import styles from "./index.module.scss";

export const Nav: FunctionComponent = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
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
