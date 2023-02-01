import React from 'react';
import { useNavigate } from 'react-router';

const AdminIndex = () => {
    const navi = useNavigate();
    const onProductList = () => {
        navi("/admin/productList");
    }

    return(
        <div>
            <div>
                어드민 페이지
            </div>
            <div>
                <button onClick={onProductList}>제품 리스트</button>
            </div>
        </div>
    );
}

export default AdminIndex;