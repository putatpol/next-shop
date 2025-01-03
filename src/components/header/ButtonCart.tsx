"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ProductCart from "../product/ProductCart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Props = {
  productsLength: number;
};

const IconCart = ({ productsLength }: Props) => {
  return (
    <>
      <div className="flex items-center rounded-lg border px-4 py-2 text-sm">
        <div className="mr-1 size-4">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <span>({productsLength})</span>
      </div>
    </>
  );
};

const ButtonCart = () => {
  const products = useSelector((state: RootState) => state.productCart.items);

  const calculatePrice = () => {
    const total = products.reduce((total, item) => total + item.totalPrice, 0);
    return total.toFixed(2);
  };
  return (
    <div className="space-x-4">
      <Menu>
        <MenuButton>
          <IconCart productsLength={products.length} />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="itemCart mt-2 rounded-lg border shadow-md"
        >
          <MenuItem>
            <ProductCart products={products} />
          </MenuItem>
          <div className="min-w-[20rem] px-5 py-2 *:flex *:items-center *:justify-between">
            <div>
              <small>รายการสินค้า</small>
              <small>{products.length}</small>
            </div>
            <div>
              <small>ราคารวม</small>
              <p className="text-rose-500 font-bold">$ {calculatePrice()}</p>
            </div>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};
export default ButtonCart;
