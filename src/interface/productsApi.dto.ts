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
  products: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };
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

export interface profileDto {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  }
}
