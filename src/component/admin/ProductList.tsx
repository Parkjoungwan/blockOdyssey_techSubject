import React from "react";
import ProductListView from "./views/ProductListView";
import useProductList from "../../query/admin/useProductList";
import { Iview } from "./types";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const ProductList = () => {
  const { data, isLoading } = useProductList();
  if (window.location.search === "")
    window.location.href =
      "/admin/productList?page=1&rows=10&condition=all&keyword=";
  const queryString = window.location.search;
  const params = queryString.split("&");
  let page, rows, condition, keyword;
  for (let i = 0; i < params.length; i++) {
    const param = params[i].split("=");
    if (param[0] === "?page") page = param[1];
    if (param[0] === "rows") rows = param[1];
    if (param[0] === "condition") condition = param[1];
    if (param[0] === "keyword") keyword = param[1].replaceAll("%20", " ");
  }
  const props: Iview = {
    isLoading,
    productList: data,
    page,
    rows,
    condition,
    keyword,
  };
  return (
    <Provider store={store}>
      <ProductListView {...props} />
    </Provider>
  );
};

export default ProductList;
