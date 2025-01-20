import React from "react";
import ButtonCart from "../cart/ButtonCart";
import Navber from "./Navber";
import Link from "next/link";
import ButtonLogin from "../login/ButtonLogin";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="flex justify-between border-b border-gray-300 bg-[--background] px-4 py-4 *:flex *:items-center md:px-8">
        <div>
          <Link href={"/"} className="duration-300 ease-out hover:scale-110">
            <h4>StyleDee</h4>
          </Link>
        </div>
        <Navber />
        <div className="space-x-2">
          <ButtonCart />
          <ButtonLogin />
        </div>
      </div>
    </header>
  );
};

export default Header;
