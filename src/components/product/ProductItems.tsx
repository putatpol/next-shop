import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ProductApiDto } from "@/interface/productsApi.dto";

const ProductItems = ({ productList }: { productList: ProductApiDto[] }) => {
  console.log("Category: ",productList[0].category)
  return (
    <>
      {productList.map((item: ProductApiDto) => (
        <div key={item.id}>
          <Link
            href={"/detail"}
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
                <b className="text-lg line-clamp-1">{item.title}</b>
              </Link>
              <p className="mb-2 text-sm">{item.category}</p>
              <b>${item.price}</b>
            </div>
            <button className="self-end">
              <FontAwesomeIcon icon={faCartPlus} className="size-6" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItems;
