"use client";

import Link from "next/link";

export default function ErrorInfoPage() {
  return (
    <div className="container mx-auto h-screen ">
      <div className="flex h-full flex-col justify-center">
        <h2 className="text-center text-5xl font-thin"> Page</h2>
        <div className="text-center mt-4">
          <p>Please try again later</p>
          <Link href={"/"}>
          <button className="py-2 px-4 rounded-full bg-black text-white mt-4">Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
