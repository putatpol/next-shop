import { Dispatch } from "@reduxjs/toolkit";
import { addProductCart, setLoadingCart } from "@/redux/slices/productCartSlice";

export const handleAddToCart = (
  dispatch: Dispatch,
  id: number,
  title: string,
  price: number,
  thumbnail: string,
  qty: number,
) => {
  const totalPrice = price * 1;

  // Add product to cart
  dispatch(
    addProductCart({
      products: { id, title, price, thumbnail },
      quantity: qty,
      totalPrice,
    }),
  );

  // Set loading state for this product
  dispatch(setLoadingCart({ id, loading: true }));

  // Simulate delay to remove loading state
  setTimeout(() => {
    dispatch(setLoadingCart({ id, loading: false }));
  }, 1000);
};
