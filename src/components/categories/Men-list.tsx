"use client"

import Link from "next/link";
import {
  MEN_SHIRTS_ROUTE_PATH,
  MEN_SHOES_ROUTE_PATH,
  MEN_SUNGLASSES_ROUTE_PATH,
  MEN_WATCHES_ROUTE_PATH,
} from "@/const/route-paths.const";
import { usePathname } from "next/navigation";

const navLink = [
  {
    name: "Shirt",
    href: MEN_SHIRTS_ROUTE_PATH,
  },
  {
    name: "Shoes",
    href: MEN_SHOES_ROUTE_PATH,
  },
  {
    name: "Watches",
    href: MEN_WATCHES_ROUTE_PATH,
  },
  {
    name: "Sunglasses",
    href: MEN_SUNGLASSES_ROUTE_PATH,
  },
];

export default function MenList() {
  const pathname = usePathname();
  return (
    <>
      {navLink.map((link, index) => {
        return (
          <li key={index} className="list-none">
            <Link
              href={link.href}
              className={`${
                pathname === link.href && "pointer-events-none bg-black text-white py-2 px-4 rounded-full"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
