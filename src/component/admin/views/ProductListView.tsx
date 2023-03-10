import React, { useState } from "react";
import "../../../styles/admin/ProductListView.css";
import { IProductResponse } from "../../../utils/types";
import { Iview } from "../types";

const ProductListView = ({
  productList,
  isLoading,
  page,
  rows,
  condition,
  keyword,
}: Iview) => {
  const makeList = () => {
    let filiterData: IProductResponse[] | undefined = productList?.products;
    if ("all" === condition && keyword) {
      filiterData = productList?.products.filter(
        (product) =>
          product.description.includes(keyword) ||
          product.title.includes(keyword) ||
          product.brand.includes(keyword)
      );
    }
    if ("title" === condition && keyword) {
      filiterData = productList?.products.filter((product) =>
        product.title.includes(keyword)
      );
    }
    if ("brand" === condition && keyword) {
      filiterData = productList?.products.filter((product) =>
        product.brand.includes(keyword)
      );
    }
    if ("description" === condition && keyword) {
      filiterData = productList?.products.filter((product) =>
        product.description.includes(keyword)
      );
    }
    return filiterData?.slice((Number(page) - 1) * Number(rows));
  };

  const listResult = makeList();
  const [pageNum, setPageNum] = useState(page);
  const [rowNum, setRowNum] = useState(rows);
  const [searchCondition, setSearchCondition] = useState(condition);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onSearch = () => {
    window.location.href =
      "/admin/productList?page=1&rows=" +
      rowNum +
      "&condition=" +
      searchCondition +
      "&keyword=" +
      searchKeyword;
  };
  const onKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const onCondition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCondition(e.target.value);
  };
  const onRow = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.href =
      "/admin/productList?page=1&rows=" +
      e.target.value +
      "&condition=" +
      searchCondition +
      "&keyword=" +
      searchKeyword;
  };
  const makePageation = () => {
    let arr = [];
    let lastNumber = 0;
    if (listResult && listResult?.length % Number(rowNum) === 0)
      lastNumber = Math.floor(
        (listResult.length + (Number(page) - 1) * Number(rows)) / Number(rowNum)
      );
    else if (listResult)
      lastNumber = Math.floor(
        (listResult.length + (Number(page) - 1) * Number(rows)) /
          Number(rowNum) +
          1
      );
    for (let i = 1; i <= lastNumber; i++) {
      arr.push(
        <button
          key={i}
          onClick={() => {
            window.location.href =
              "/admin/productList?page=" +
              i +
              "&rows=" +
              rowNum +
              "&condition=" +
              searchCondition +
              "&keyword=" +
              searchKeyword;
          }}
        >
          {i}
        </button>
      );
    }
    return arr;
  };
  if (isLoading) {
    return <>Loading</>;
  }
  return (
    <div className="container">
      <div className="search">
        <select value={searchCondition} onChange={onCondition}>
          <option value={"all"}>??????</option>
          <option value={"title"}>?????????</option>
          <option value={"brand"}>?????????</option>
          <option value={"description"}>????????????</option>
        </select>
        <input value={searchKeyword} onChange={onKeyword}></input>
        <button onClick={onSearch}>??????</button>
      </div>
      <div className="amount">
        ??? ??????{" "}
        {listResult ? listResult.length + (Number(page) - 1) * Number(rows) : 0}
      </div>
      <div className="productListContainer">
        <div className="productList">
          <div className="id">????????????</div>
          <div className="title">?????????</div>
          <div className="brand">?????????</div>
          <div className="description">????????????</div>
          <div className="price">??????</div>
          <div className="rating">??????</div>
          <div className="stock">??????</div>
          {listResult?.map((Product, index) => {
            if (index >= Number(rowNum) + 1) return false;
            return (
              <React.Fragment key={Product.id}>
                <div className="id">{Product.id}</div>
                <div className="title">{Product.title}</div>
                <div className="brand">{Product.brand}</div>
                <div className="description">
                  {Product.description.length > 40
                    ? Product.description.substring(0, 39) + "..."
                    : Product.description}
                </div>
                <div className="price">{Product.price}</div>
                <div className="rating">{Product.rating}</div>
                <div className="stock">{Product.stock}</div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="pagenation">
          <select value={rowNum} onChange={onRow}>
            <option value={"10"}>10</option>
            <option value={"20"}>20</option>
            <option value={"50"}>50</option>
          </select>
          {makePageation()}
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
