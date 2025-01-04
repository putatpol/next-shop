import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ProductInfoDetail = () => {
  return (
    <div>
      <div>
        <h1>Men Check Shirt</h1>
        <h5 className="font-thin text-gray-400">mens-shirts</h5>
        <div className="mt-4 space-x-4 divide-x-2">
          <small className="text-gray-400">sku: 2000000</small>
          <small className="rounded-full bg-green-300 px-2 py-1">
            In Stock
          </small>
        </div>
      </div>

      <div className="mt-8">
        <p>
          The Men Check Shirt is a classic and versatile shirt featuring a
          stylish check pattern. Suitable for various occasions, it adds a smart
          and polished touch to your wardrobe.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <h3>$450</h3>
          <small className="px-2 text-sm text-green-600">-25% off</small>
        </div>
        <p className="text-sm text-gray-400 line-through">$700</p>
      </div>

      <div className="mt-8 flex gap-4 items-center">
        <div className="*:size-8 [&_button]:border [&_button]:rounded-lg [&_button]:border-gray-300 space-x-1">
          <button className="hover:border-gray-500">+</button>
          <input type="number" className="bg-none text-center"/>
          <button className="hover:border-gray-500">-</button>
        </div>
        <button className="rounded-lg bg-black px-4 py-2 text-lg text-white hover:opacity-80">
          add to cart
        </button>
      </div>

      <div className="mt-8">
        <div className="flex items-center border-b border-t border-gray-400 p-5">
          <FontAwesomeIcon icon={faCaretDown} className="size-4" />
          <p>Review</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoDetail;
