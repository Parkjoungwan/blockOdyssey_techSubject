import React from 'react';
import { useState } from "react";
import "../../../styles/admin/ProductListView.css"


const ProductListView = () => {

    return(
        <div className='container'>
            <div className='serach'>
                검색 파트
            </div>
            <div className='amount'>
                총 갯수
            </div>
            <div className='productList'>
                리스트
            </div>
        </div>
    );
}

export default ProductListView;