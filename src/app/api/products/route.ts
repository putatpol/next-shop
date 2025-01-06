import { NextResponse } from "next/server";

export async function GET(request: Request) {
const { searchParams } = new URL(request.url);
const categoryName = searchParams.get("category");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/category/${categoryName}`,
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
