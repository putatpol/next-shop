import Link from "next/link";
import ButtonBack from "@/components/header/ButtonBack";
import ProductInfoImage from "@/components/product/product-info-Image";
import ProductInfoDetail from "@/components/product/product-info-detail";

export default function DetailPage() {
  return (
    <div className="container mx-auto my-6 flex min-h-[80vh] flex-col">
      <div className="flex items-start gap-10">
        <ButtonBack />
        <ProductInfoImage />
        <ProductInfoDetail />
      </div>
      {/* discription */}
      <div></div>
    </div>
  );
}
