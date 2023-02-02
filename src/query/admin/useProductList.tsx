import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { adminApi } from "../../lib/apis/adminAPI";
import { IGetProductList } from "../../utils/types";

const useProductList = () => {
  return useQuery("getProductList", () => adminApi.getList(), {
    select: (data: AxiosResponse<IGetProductList>) => {
      return data.data;
    },
  });
};

export default useProductList;
