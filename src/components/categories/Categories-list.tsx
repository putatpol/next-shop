"use client";

import Link from "next/link";
import {
  MEN_SHIRTS_ROUTE_PATH,
  MEN_SHOES_ROUTE_PATH,
  MEN_SUNGLASSES_ROUTE_PATH,
  MEN_WATCHES_ROUTE_PATH,
  WOMEN_BAGS_ROUTE_PATH,
  WOMEN_DRESSES_ROUTE_PATH,
  WOMEN_JEWELLERY_ROUTE_PATH,
  WOMEN_SHOES_ROUTE_PATH,
  WOMEN_WATCHES_ROUTE_PATH,
} from "@/const/route-paths.const";
import { usePathname } from "next/navigation";

const manNavLink = [
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

const womenNavLink = [
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

export default function CategoriesList({ gender }: { gender: String }) {
  const pathname = usePathname();
  const navLinks = gender === "mens" ? manNavLink : gender === "womens" ? womenNavLink : [];

  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <li key={index} className="list-none">
            <Link
              href={link.href}
              className={`${
                pathname === link.href &&
                "pointer-events-none rounded-full bg-black px-4 py-2 text-white"
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
