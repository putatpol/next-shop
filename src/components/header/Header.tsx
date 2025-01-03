import React from "react";
import ButtonCart from "./ButtonCart";
import Navber from "./Navber";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-8 flex justify-between border-b p-4 *:flex *:items-center">
      <div>
        <Link href={"/"}>
          <h4>StyleDee</h4>
        </Link>
      </div>
      <Navber />
      <ButtonCart />
      {/* <ButtonTheme /> */}
    </header>
  );
};

export default Header;
