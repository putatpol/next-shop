import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCartType } from "@/interface/productsApi.dto";

interface ProductState {
  items: ProductCartType[];
}

const initialState: ProductState = {
  items: [],
};
const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addProductCart(state, action: PayloadAction<ProductCartType>) {
      const existingProduct = state.items.find(
        (item) => item.products.id === action.payload.products.id,
      );

      if (existingProduct) {
        // alrady item > add item quantity, new price
        existingProduct.quantity += action.payload.quantity;
        existingProduct.totalPrice =
          existingProduct.products.price * existingProduct.quantity;
      } else {
        // no item > add item, price
        const totalPrice =
          action.payload.products.price * action.payload.quantity;
        state.items.push({
          ...action.payload,
          totalPrice,
        });
      }
    },
    removeProductCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.products.id !== action.payload,
      );
    },
  },
});

export const { addProductCart, removeProductCart } = productCartSlice.actions;
export default productCartSlice.reducer;