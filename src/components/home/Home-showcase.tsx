import Image from "next/image";
import imgProductShowcase1 from "@images/sc-shoes.png";
import imgProductShowcase2 from "@images/sc-shirt.png";
import imgProductShowcase3 from "@images/sc-dress.png";
import imgProductShowcase4 from "@images/sc-bag.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import {
  MEN_SHIRTS_ROUTE_PATH,
  WOMEN_BAGS_ROUTE_PATH,
} from "@/const/route-paths.const";

const HomeShowcase = () => {
  return (
    <div className="container mx-auto">
      <h2 className="mb-10 text-center">Product Showcase</h2>
      <div className="grid grid-cols-4">
        <div className="flex size-80 items-center justify-center">
          <div className="space-y-2 *:font-thin">
            <h3>See</h3>
            <h3>What's</h3>
            <h3>News</h3>
          </div>
        </div>
        <div className="size-80 bg-[--bgProduct3]">
          <Image src={imgProductShowcase1} alt="product showcase1" />
        </div>
        <div className="flex size-80 items-center justify-center">
          <Link
            href={MEN_SHIRTS_ROUTE_PATH}
            className="flex items-center space-x-2"
          >
            <p className="font-thin">For Gentlemen's</p>
            <FontAwesomeIcon icon={faSquareArrowUpRight} className="size-4" />
          </Link>
        </div>
        <div className="size-80 bg-[--bgProduct3]">
          <Image src={imgProductShowcase2} alt="product showcase2" />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="size-80 bg-[--bgProduct3]">
          <Image src={imgProductShowcase3} alt="product showcase3" />
        </div>
        <div className="flex size-80 items-center justify-center">
          <Link
            href={WOMEN_BAGS_ROUTE_PATH}
            className="flex items-center space-x-2"
          >
            <p className="font-thin">Ladies' Collection</p>
            <FontAwesomeIcon icon={faSquareArrowUpRight} className="size-4" />
          </Link>
        </div>
        <div className="size-80 bg-[--bgProduct3]">
          <Image src={imgProductShowcase4} alt="product showcase4" />
        </div>
        <div className="size-80"></div>
      </div>
    </div>
  );
};

export default HomeShowcase;
