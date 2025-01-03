"use client";
import Link from "next/link";
import {
  WOMEN_BAGS_ROUTE_PATH,
  WOMEN_DRESSES_ROUTE_PATH,
  WOMEN_JEWELLERY_ROUTE_PATH,
  WOMEN_SHOES_ROUTE_PATH,
  WOMEN_WATCHES_ROUTE_PATH,
} from "@/const/route-paths.const";
import { usePathname } from "next/navigation";

const navLink = [
  {
    name: "Bags",
    href: WOMEN_BAGS_ROUTE_PATH,
  },
  {
    name: "Dresses",
    href: WOMEN_DRESSES_ROUTE_PATH,
  },
  {
    name: "Jewellery",
    href: WOMEN_JEWELLERY_ROUTE_PATH,
  },
  {
    name: "Shoes",
    href: WOMEN_SHOES_ROUTE_PATH,
  },
  {
    name: "Watches",
    href: WOMEN_WATCHES_ROUTE_PATH,
  },
];

export default function WomenList() {
  const pathname = usePathname();
  return (
    <>
      {navLink.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href && "pointer-events-none underline"
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
