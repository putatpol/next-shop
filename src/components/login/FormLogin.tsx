"use client";

import React from "react";
import { login } from "@/redux/slices/loginSlice";
import { useDispatch } from "react-redux";

const FormLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login("token123"));
  };
  return (
    <>
      <div className="flex w-1/2 flex-col [&_input]:p-4">
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          className="mb-4 focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="mb-12 focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button
          onClick={handleLogin}
          className="rounded-full border bg-black px-4 py-2 text-white duration-300 ease-out hover:border-black"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default FormLogin;
