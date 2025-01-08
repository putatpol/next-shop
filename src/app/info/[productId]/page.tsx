import ButtonBack from "@/components/utils/ButtonBack";
import ProductInfoCarousel from "@/components/product/Product-info-carousels";
import ProductInfoDetail from "@/components/product/Product-info-details";
import { ProductApiDto } from "@/interface/productsApi.dto";

export default async function ProductInfoPage({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/${(await params).productId}`,
    {
      method: "GET",
    },
  );
  const productData: ProductApiDto = await res.json();
  // console.log(productData)

  return (
    <>
      <div className="container mx-auto p-6 ">
      <div className="flex flex-wrap items-start  ">
        <div className="basis-full lg:basis-2/5 space-y-4">
          <ButtonBack />
          <ProductInfoCarousel images={productData.images} />
        </div>
        <div className="flex-1 space-y-6 p-3 md:p-5">
          <ProductInfoDetail productData={productData} />
        </div>
      </div>
    </div>
      
    </>
  );
}
