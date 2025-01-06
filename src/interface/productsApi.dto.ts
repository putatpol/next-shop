export interface ProductApiDto {
  id: number;
  title: string;
  description: string;
  category: string;
  discountPercentage: number;
  rating: number;
  sku: string;
  availabilityStatus: string;
  reviews: ReviewDto[];
  price: number;
  images: string[];
  thumbnail: string;
}
export interface ProductCartType {
  products: ProductApiDto;
  quantity: number;
  totalPrice: number;
}

export interface ProductsApiResponse {
  products: ProductApiDto[];
  total: number;
  skip: number;
}

export interface ReviewDto {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}
