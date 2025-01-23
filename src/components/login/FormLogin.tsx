"use client";

import { login } from "@/redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { useState } from "react";

const FormLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorAlert, setErrorAlert] = useState("");

  // Handler on submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement;
    const username = form.username.value;
    const password = form.password.value;

    const postLogin = async () => {
      const url = "https://dummyjson.com/auth/login";
      const data = {
        username,
        password,
        expiresInMins: 30,
      };

      try {
        setErrorAlert("");
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          setErrorAlert("Username or password invalid!");
          throw new Error(`HTTP: Error: ${response.status}`);
        }

        const result = await response.json();
        dispatch(login(`${result.firstName}`));

        sessionStorage.removeItem("redirectUrl");

        // Pre-routing to URL
        const redirectUrl = sessionStorage.getItem("redirectUrl") || "/";
        router.push(redirectUrl);
      } catch (error) {
        console.error("Error catch", error);
      }
    };

    // Callback function
    postLogin();
  };

  return (
    <>
      <Form
        action={""}
        onSubmit={handleSubmit}
        className="flex w-1/2 flex-col [&_input]:p-4"
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          className="mb-4 focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="mb-12 focus:outline-none focus:ring-1 focus:ring-black"
        />
        <small className="mb-2 text-center text-red-500">{errorAlert}</small>
        <button
          type="submit"
          className="rounded-full border bg-black px-4 py-2 text-white duration-300 ease-out hover:border-black"
        >
          Login
        </button>
      </Form>
    </>
  );
};

export default FormLogin;
