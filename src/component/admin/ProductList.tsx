import React from "react";
import ProductListView from "./views/ProductListView";
import useProductList from "../../query/admin/useProductList";
import { Ipagination, Iview } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const ProductList = () => {
  const { data, isLoading } = useProductList();

  const props: Iview = {
    isLoading,
    productList: data,
  };

  return (
    <Provider store={store}>
      <ProductListView {...props} />;
    </Provider> 
  );
};

export default ProductList;
