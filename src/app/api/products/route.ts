import { NextResponse } from "next/server";

export async function GET(request: Request) {
//   const url = new URL(request.url);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/category/mens-shirts`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: res.status },
    );
  }

  const products = await res.json();
  return NextResponse.json(products)
}
