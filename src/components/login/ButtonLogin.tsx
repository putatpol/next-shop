"use client";

import Link from "next/link";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/loginSlice";
import { RootState } from "@/redux/store";
import ButtonCart from "../cart/ButtonCart";

const ButtonLogin = () => {
  const dispatch = useDispatch();

  const logined = useSelector((state: RootState) => state.loginState.isLogin);
  const user = useSelector(
    (state: RootState) => state.loginState.userFirstname,
  );

  const handleLogout = () => {
    sessionStorage.removeItem("redirectUrl");
    dispatch(logout());
  };

  console.log("logined", logined);
  console.log("user: ", user);

  return (
    <>
      {logined ? (
        <>
          {/* Logined */}
          <ButtonCart />
          <div>
            <Menu>
              <MenuButton
                className={
                  "flex items-center rounded-full px-4 py-2 text-sm duration-300 ease-out hover:bg-gray-200"
                }
              >
                <p>{user}</p>
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className="z-50 mt-4 w-52 border border-gray-300 bg-[--background]"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 border-b border-gray-300 p-4 data-[focus]:bg-gray-200">
                    Profile
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={handleLogout}
                    className="group flex w-full items-center gap-2 p-4 data-[focus]:bg-gray-200"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </>
      ) : (
        <>
          {/* No login */}
          <Link href={"/login"}>
            <button className="flex items-center rounded-full px-4 py-2 text-sm duration-300 ease-out hover:bg-gray-200">
              Login
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default ButtonLogin;
