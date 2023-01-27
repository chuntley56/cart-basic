import type { NextPage } from "next";
import { products } from "../fixtures/products";
import ProductList from "../components/ProductList";
import { Nav } from "../components/Nav";
import React, { FunctionComponent, useState } from "react";
import { Cart } from "../types";

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Nav />
      <ProductList />
    </div>
  );
};

export default Home;
