import ButtonBack from "@/components/header/ButtonBack";
import ProductInfoImage from "@/components/product/product-info-carousel";
import ProductInfoDetail from "@/components/product/product-info-detail";
import { ProductApiDto } from "@/interface/productsApi.dto";

export default async function ProductInfoPage({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const product_id = (await params).productId;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/${product_id}`,
    {
      method: "GET",
    },
  );
  const productData: ProductApiDto = await res.json();
  // console.log(productData)

  return (
    <div className="container mx-auto my-6 flex flex-col">
      <div className="flex items-start gap-10">
        <ButtonBack />
        <ProductInfoImage images={productData.images} />
        <ProductInfoDetail productData={productData} />
      </div>
    </div>
  );
}
