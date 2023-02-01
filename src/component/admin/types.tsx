import { IGetProductList } from "../../utils/types"

export interface Iview {
    isLoading: boolean;
    ProductList: IGetProductList | undefined;
}