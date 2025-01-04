import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import img from "@images/sc-shoes.png";
import Image from "next/image";
import Link from "next/link";

const ProductItems = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        <div>
          <Link
            href={"/detail"}
            className="flex w-full justify-center bg-[--bgProductItems]"
          >
            <Image src={img} alt="test" />
          </Link>
          <div className="flex items-center justify-between p-2">
            <div>
              <Link href={"/detail"}>
                <b className="text-lg">Product name</b>
              </Link>
              <p className="text-sm">Product categories</p>
              <b>$200</b>
            </div>
            <button className="self-end">
              <FontAwesomeIcon icon={faCartPlus} className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
