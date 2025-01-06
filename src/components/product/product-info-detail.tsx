import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCaretDown, faStar } from "@fortawesome/free-solid-svg-icons";

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

      <div className="mt-8 flex items-center gap-4">
        <div className="space-x-1 *:size-8 [&_button]:rounded-lg [&_button]:border [&_button]:border-gray-300">
          <button className="hover:border-gray-500">+</button>
          <input type="number" className="bg-none text-center" />
          <button className="hover:border-gray-500">-</button>
        </div>
        <button className="rounded-lg bg-black px-4 py-2 text-lg text-white hover:opacity-80">
          add to cart
        </button>
      </div>

      <div className="mt-8 *:p-5 border-b  border-t border-gray-400">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCaretDown} className="size-4" />
          <p>Review (3)</p>
        </div>

        {/* item review */}
        <div className="*:mb-8">
          <div>
            <div className="flex justify-between">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>2024-05-23T08:56:21.623Z</p>
            </div>
            <div className="mt-2">
              <b>Elena Long</b>
              <p>Would not buy again</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductInfoDetail;
