export interface ProductApi {
    id: number;
    title: string;
    price: number;
    images: string[];
  }
  export interface ProductCartType {
    products: ProductApi;
    quantity: number;
    totalPrice: number;
  }
  
  export interface ProductsApiResponse {
    products: ProductApi[];
    total: number;
    skip: number;
  }