import Image from "next/image";
import imgProductShowcase1 from "@images/sc-shoes.png";
import imgProductShowcase2 from "@images/sc-shirt.png";
import imgProductShowcase3 from "@images/sc-dress.png";
import imgProductShowcase4 from "@images/sc-bag.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  MEN_SHIRTS_ROUTE_PATH,
  WOMEN_BAGS_ROUTE_PATH,
  SHOWCASE_PRODUCT1,
  SHOWCASE_PRODUCT2,
  SHOWCASE_PRODUCT3,
  SHOWCASE_PRODUCT4,
} from "@/const/route-paths.const";

const HomeShowcase = () => {
  return (
    <div className="container mx-auto">
      <h2 className="mb-10 text-center">Product Showcase</h2>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-0">
        {/* Item 1 | Title */}
        <div className="hidden size-80 items-center justify-center md:order-8 md:flex lg:order-1">
          <div className="space-y-2 *:font-thin">
            <h3>See</h3>
            <h3>What&apos;s</h3>
            <h3>News</h3>
          </div>
        </div>

        {/* Item 2 | Product 1 */}
        <div className="group relative order-2 size-80 bg-[--bgProductItems] md:order-2 lg:order-2">
          <Link href={SHOWCASE_PRODUCT1}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute left-1/2 top-1/2 z-10 hidden size-8 -translate-x-1/2 -translate-y-1/2 transform group-hover:flex"
            />
            <Image
              src={imgProductShowcase1}
              alt="product showcase1"
              className="duration-300 ease-out group-hover:opacity-70"
            />
          </Link>
        </div>

        {/* Item 3 | Link category Mens */}
        <div className="order-1 flex h-20 items-center justify-center md:order-1 md:size-80 lg:order-3">
          <Link
            href={MEN_SHIRTS_ROUTE_PATH}
            className="flex items-center space-x-2 duration-300 ease-out hover:tracking-widest"
          >
            <p className="font-thin">For Gentlemen&apos;s</p>
            <FontAwesomeIcon icon={faSquareArrowUpRight} className="size-4" />
          </Link>
        </div>

        {/* Item 4 | Product 2 */}
        <div className="group relative order-2 size-80 bg-[--bgProductItems] md:order-3 lg:order-4">
          <Link href={SHOWCASE_PRODUCT2}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute left-1/2 top-1/2 z-10 hidden size-8 -translate-x-1/2 -translate-y-1/2 transform group-hover:flex"
            />
            <Image
              src={imgProductShowcase2}
              alt="product showcase2"
              className="duration-300 ease-out group-hover:opacity-70"
            />
          </Link>
        </div>

        {/* Item 5 | Product 3 */}
        <div className="group relative order-4 size-80 bg-[--bgProductItems] md:order-7 lg:order-5">
          <Link href={SHOWCASE_PRODUCT3}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute left-1/2 top-1/2 z-10 hidden size-8 -translate-x-1/2 -translate-y-1/2 transform group-hover:flex"
            />
            <Image
              src={imgProductShowcase3}
              alt="product showcase3"
              className="duration-300 ease-out group-hover:opacity-70"
            />
          </Link>
        </div>

        {/* Item 6 | Link category Womens */}
        <div className="order-3 flex h-20 items-center justify-center md:order-4 md:size-80 lg:order-6">
          <Link
            href={WOMEN_BAGS_ROUTE_PATH}
            className="flex items-center space-x-2 duration-300 ease-out hover:tracking-widest"
          >
            <p className="font-thin">Ladies&apos; Collection</p>
            <FontAwesomeIcon icon={faSquareArrowUpRight} className="size-4" />
          </Link>
        </div>

        {/* Item 7 | Product 4 */}
        <div className="group relative order-5 size-80 bg-[--bgProductItems] md:order-6 lg:order-7">
          <Link href={SHOWCASE_PRODUCT4}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute left-1/2 top-1/2 z-10 hidden size-8 -translate-x-1/2 -translate-y-1/2 transform group-hover:flex"
            />
            <Image
              src={imgProductShowcase4}
              alt="product showcase4"
              className="duration-300 ease-out group-hover:opacity-70"
            />
          </Link>
        </div>

        {/* Item 7 | Blank */}
        <div className="order-8 hidden size-80 md:order-5 md:flex lg:order-8" />
      </div>
    </div>
  );
};

export default HomeShowcase;
