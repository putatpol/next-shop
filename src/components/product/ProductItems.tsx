"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ProductApiDto } from "@/interface/productsApi.dto";
import { useDispatch } from "react-redux";
import { addProductCart } from "@/redux/slices/productCartSlice";

const ProductItems = ({ productList }: { productList: ProductApiDto[] }) => {
  const dispatch = useDispatch();
  const [clickAddCart, setClickAddCart] = useState<{
    [key: number]: boolean;
  }>({});

  // Function add to cart
  const handleAddToCart = (
    id: number,
    title: string,
    price: number,
    thumbnail: string,
  ) => {
    const totalPrice = price * 1;
    dispatch(
      addProductCart({
        products: { id, title, price, thumbnail },
        quantity: 1,
        totalPrice,
      }),
    );
    // Add to cart by id
    setClickAddCart((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setClickAddCart((prev) => ({ ...prev, [id]: false }));
    }, 1000);
  };

  // console.log("Category: ", productList[0].category);
  return (
    <>
      {productList.map((item: ProductApiDto) => (
        <div key={item.id}>
          <Link
            href={`/info/${item.id}`}
            className="flex w-full justify-center bg-[--bgProductItems]"
          >
            <Image
              width={500}
              height={500}
              src={item.thumbnail}
              alt={item.title}
            />
          </Link>
          <div className="flex items-center justify-between p-2">
            <div>
              <Link href={"/detail"}>
                <b className="line-clamp-1 text-lg">{item.title}</b>
              </Link>
              <p className="mb-2 text-sm">{item.category}</p>
              <b>${item.price}</b>
            </div>
            <div className="relative">
              <button
                className="self-end rounded-full px-3 py-2 hover:bg-gray-200"
                disabled={clickAddCart[item.id]}
                onClick={() => {
                  handleAddToCart(
                    item.id,
                    item.title,
                    item.price,
                    item.thumbnail,
                  );
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} className="size-6" />
              </button>
              {clickAddCart[item.id] && (
                <span className="animate-fadeUp absolute -translate-y-2 text-gray-500">
                  +1
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItems;
