import React from "react";
import { useState } from "react";
import ProductListView from "./views/ProductListView";
import useProductList from "../../query/admin/useProductList";
import { Iview } from "./types";
import { IGetProductList } from "../../utils/types";

const ProductList = () => {
  const { data, isLoading } = useProductList();
  const props:Iview = {
    isLoading,
    ProductList: data,
  }
  return <ProductListView {...props}/>;
};

export default ProductList;
