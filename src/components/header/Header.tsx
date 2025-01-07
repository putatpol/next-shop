import React from "react";
import ButtonCart from "./ButtonCart";
import Navber from "./Navber";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-8 flex justify-between border-b border-gray-300 bg-[--background] px-0 py-4 *:flex *:items-center md:px-4">
        <div>
          <Link href={"/"}>
            <h4>StyleDee</h4>
          </Link>
        </div>
        <Navber />
        <ButtonCart />
        {/* <ButtonTheme /> */}
      </div>
    </header>
  );
};

export default Header;
