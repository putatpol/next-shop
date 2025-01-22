"use client";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../utils/AddCartHandler";
import { ProductApiDto } from "@/interface/productsApi.dto";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useSaveRedirectUrl } from "../utils/useSaveRedirectUrl";

export const ButtonAddCart = ({
  productData,
}: {
  productData: ProductApiDto;
}) => {
  const [itemQty, setItemQty] = useState(1);

  const dispatch = useDispatch();
  const loadingCart = useSelector(
    (state: RootState) => state.productCart.loadingCart,
  );
  const logined = useSelector((state: RootState) => state.loginState.isLogin);

  const handleAddItemCart = (productData: ProductApiDto) => {
    if (!logined) {
      redirect("/login");
    }
    handleAddToCart(
      dispatch,
      productData.id,
      productData.title,
      productData.price,
      productData.thumbnail,
      itemQty,
    );
  };

  // Save url for not login
  useSaveRedirectUrl(logined);

  return (
    <>
      {/* Product Price */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <h3>${productData.price}</h3>
          <small className="px-2 text-sm text-green-600">
            -{productData.discountPercentage}% off
          </small>
        </div>
        <p className="text-sm text-gray-400 line-through">
          $
          {(
            productData.price /
            (1 - productData.discountPercentage / 100)
          ).toFixed(2)}
        </p>
      </div>

      {/* Add to cart */}
      <div className="relative mt-8 flex items-center gap-4">
        <div className="flex items-center justify-between gap-2 space-x-1 [&_button]:rounded-lg [&_button]:border [&_button]:border-gray-300">
          <button
            onClick={() => {
              setItemQty(Math.max(itemQty - 1, 1));
            }}
            className="size-8 hover:border-gray-500"
          >
            -
          </button>
          <div className="text-center">{itemQty}</div>
          <button
            onClick={() => {
              setItemQty(itemQty + 1);
            }}
            className="size-8 hover:border-gray-500"
          >
            +
          </button>
        </div>
        <button
          disabled={loadingCart[productData.id]}
          onClick={() => {
            handleAddItemCart(productData);
          }}
          className="rounded-lg bg-black px-4 py-2 text-lg text-white hover:opacity-80 disabled:bg-gray-400"
        >
          add to cart
          {loadingCart[productData.id] && (
            <span className="absolute -translate-y-10 animate-fadeUp text-gray-500">
              + {itemQty}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
