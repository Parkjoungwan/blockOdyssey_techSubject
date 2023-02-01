import React from 'react';
import { useState, useEffect } from "react";
import "../../../styles/admin/ProductListView.css"
import { Iview } from '../types';

const ProductListView = ({ProductList, isLoading}: Iview) => {
    if (isLoading)
        return <>Loading</>
    console.log(ProductList?.products.length);
    return(
        <div className='container'>
            <div className='serach'>
                <select>
                    <option>상품명</option>
                    <option>브랜드</option>
                    <option>상품내용</option>
                </select>
                검색 파트
            </div>
            <div className='amount'>
                총 갯수 {ProductList?.products.length}
            </div>
            <div className='productList'>
                {ProductList?.products.map((Product, index) => {
                   return (
                    <div key={index}>{Product.id}, {Product.title}, {Product.brand}, {Product.price}, {Product.rating}, {Product.stock}</div>
                   )
                })}
                리스트
            </div>
        </div>
    );
}

export default ProductListView;