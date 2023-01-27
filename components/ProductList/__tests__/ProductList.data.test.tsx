import React from "react";
import { render } from "@testing-library/react";
import { ProductListView } from "../ProductList.view";
import { ProductList } from "../ProductList.data";
import { products } from "../../../fixtures/products";

jest.mock("../ProductList.view", () => ({
  ProductListView: jest.fn(() => null),
}));

describe("ProductList.data", () => {
  beforeEach(() => jest.clearAllMocks());

  it("does render view if data is ready", () => {
    render(<ProductList />);
    expect(ProductListView).toHaveBeenCalled();
  });
});
