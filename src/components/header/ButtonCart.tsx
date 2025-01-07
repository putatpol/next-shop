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

// Button custom style
const IconCart = ({ productsLength }: Props) => {
  return (
    <>
      <div className="flex items-center rounded-full px-4 py-2 text-sm hover:bg-gray-200">
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

  return (
    // Menu by headlessui
    <div className="space-x-4">
      <Menu>
        <MenuButton className="rounded-full *:border-0">
          <IconCart productsLength={products.length} />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="itemCart mt-4 border border-gray-300 bg-background"
        >
          <MenuItem>
            <ProductCart products={products} />
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};
export default ButtonCart;
