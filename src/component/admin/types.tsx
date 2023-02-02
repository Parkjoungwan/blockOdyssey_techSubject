import { IGetProductList } from "../../utils/types"

export interface Iview {
    isLoading: boolean;
    productList: IGetProductList | undefined;
    page: string | undefined;
    rows: string | undefined;
    condition: string | undefined;
    keyword: string | undefined;
}

export interface Ipagination {
    pageNumber: number;
    rowNumber:number;
}

export interface Isearch {
    condition: string;
    keyword: string;
}