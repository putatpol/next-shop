import Link from "next/link";
import { MEN_SHIRTS_ROUTE_PATH } from "@/const/route-paths.const";
import { WOMEN_BAGS_ROUTE_PATH } from "@/const/route-paths.const";

const Navber = () => {
  return (
    <div className="space-x-5 text-xs text-gray-500">
      <Link href={MEN_SHIRTS_ROUTE_PATH}>
        <p>Mens</p>
      </Link>
      <span>|</span>
      <Link href={WOMEN_BAGS_ROUTE_PATH}>
        <p>Womens</p>
      </Link>
    </div>
  );
};

export default Navber;
