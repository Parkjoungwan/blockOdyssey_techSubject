export interface IGetProductList {
    products: IProductResponse[]
}

export interface IProductResponse {
    id: string,
    title: string,
    description: string,
    price: string,
    discountPercentage: string,
    rating: string,
    stock: string, 
    brand: string,
    category: string,
    thumbnail: string,
    image: string[],
}