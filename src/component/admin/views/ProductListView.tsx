import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../store/paginationSlice";
import { changeKeyword } from "../../../store/searchSlice";
import { RootState } from "../../../store/store";
import "../../../styles/admin/ProductListView.css";
import { IGetProductList, IProductResponse } from "../../../utils/types";
import { Iview } from "../types";

const ProductListView = ({ productList, isLoading }: Iview) => {
  const pageNumber = useSelector(
    (state: RootState) => state.pagination.pageNumber
  );
  const searchCondition = useSelector(
    (state: RootState) => state.search.condition
  );
  const searchKeyword = useSelector((state: RootState) => state.search.keyword);
  const dispatch = useDispatch();
  if (isLoading) {
    return <>Loading</>;
  }
  const onSearch = () => {
    let filiterData: IProductResponse[] | undefined;
    if ("all" === searchCondition) {
      filiterData = productList?.products.filter(
        (product) =>
          product.description.includes(searchKeyword) ||
          product.title.includes(searchKeyword) ||
          product.brand.includes(searchKeyword)
      );
    }
    if ("title" === searchCondition) {
      filiterData = productList?.products.filter((product) =>
        product.title.includes(searchKeyword)
      );
    }
    if ("brand" === searchCondition) {
      filiterData = productList?.products.filter((product) =>
        product.brand.includes(searchKeyword)
      );
    }
    if ("description" === searchCondition) {
      filiterData = productList?.products.filter((product) =>
        product.description.includes(searchKeyword)
      );
    }
    console.log(filiterData);
  };

  const onKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeKeyword(e.target.value));
  };

  return (
    <div className="container">
      <div className="serach">
        <select>
          <option>전체</option>
          <option>상품명</option>
          <option>브랜드</option>
          <option>상품내용</option>
        </select>
        <input onChange={onKeyword}></input>
        <button onClick={onSearch}>조회</button>
      </div>
      <div className="amount">총 갯수 {productList?.products.length}</div>
      <div className="productList">
        {productList?.products.map((Product, index) => {
          return (
            <div key={index}>
              {Product.id}, {Product.title}, {Product.brand},{" "}
              {Product.description.length > 40
                ? Product.description.substring(0, 39) + "..."
                : Product.description}
              , {Product.price}, {Product.rating}, {Product.stock}
            </div>
          );
        })}
        리스트
      </div>
    </div>
  );
};

export default ProductListView;
