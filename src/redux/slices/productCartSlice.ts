import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCartType } from "@/interface/productsApi.dto";

interface ProductState {
  items: ProductCartType[];
  loadingCart: { [id: number]: boolean };
}

const initialState: ProductState = {
  items: [],
  loadingCart: {},
};
const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    // Add product to cart
    addProductCart(state, action: PayloadAction<ProductCartType>) {
      const existingProduct = state.items.find(
        (item) => item.products.id === action.payload.products.id,
      );
      if (existingProduct) {
        // Item already exists: update quantity and total price
        existingProduct.quantity += action.payload.quantity;
        existingProduct.totalPrice =
          existingProduct.products.price * existingProduct.quantity;
      } else {
        // Item doesn't exist: add new item
        const totalPrice =
          action.payload.products.price * action.payload.quantity;
        state.items.push({
          ...action.payload,
          totalPrice,
        });
      }
    },

    // Remove product from cart
    removeProductCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.products.id !== action.payload,
      );
    },

    // Update product from cart
    updateProductQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const product = state.items.find(
        (item) => item.products.id === action.payload.id,
      );
      if (product) {
        product.quantity = action.payload.quantity;
        product.totalPrice = product.quantity * product.products.price;
      }
    },
    // Set loading state for a product
    setLoadingCart(
      state,
      action: PayloadAction<{ id: number; loading: boolean }>,
    ) {
      const { id, loading } = action.payload;
      state.loadingCart[id] = loading;
    },
  },
});

export const { addProductCart, removeProductCart, updateProductQuantity, setLoadingCart } =
  productCartSlice.actions;
export default productCartSlice.reducer;
