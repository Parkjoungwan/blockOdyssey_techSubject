import { customAxiosAdmin } from "../customAxios/customAxiosAdmin";
import { IGetProductList, IProductResponse } from "../../utils/types";

export const adminApi = {
  getList: () => {
    return customAxiosAdmin().get("/products?limit=100");
  },
};
