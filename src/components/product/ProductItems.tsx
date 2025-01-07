"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ProductApiDto } from "@/interface/productsApi.dto";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../utils/AddCartHandler";
import { RootState } from "@/redux/store";

const ProductItems = ({ productList }: { productList: ProductApiDto[] }) => {
  const dispatch = useDispatch();
  const loadingCart = useSelector(
    (state: RootState) => state.productCart.loadingCart,
  );

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
                className="self-end rounded-full px-3 py-2 hover:bg-gray-200 disabled:text-gray-400"
                disabled={loadingCart[item.id]}
                onClick={() => {
                  handleAddToCart(
                    dispatch,
                    item.id,
                    item.title,
                    item.price,
                    item.thumbnail,
                    1
                  );
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} className="size-6" />
              </button>
              {loadingCart[item.id] && (
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
