import ButtonBack from "@/components/utils/ButtonBack";
import ProductInfoCarousel from "@/components/product/Product-info-carousels";
import ProductInfoDetail from "@/components/product/Product-info-details";
import { ProductApiDto } from "@/interface/productsApi.dto";
import { Metadata } from "next";

const fetchProductData = async (productId: string): Promise<ProductApiDto> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CALL_URL}/${productId}`,
    {
      method: "GET",
    },
  );
  if (!res.ok) {
    throw new Error("Falied to fetch product info");
  }
  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> => {
  const productData = await fetchProductData((await params).productId);
  return {
    title: productData.title,
    description: productData.description || "Product details page.",
  };
};

export default async function ProductInfoPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productData = await fetchProductData((await params).productId);
  // console.log(productData);

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap items-start">
          <div className="basis-full space-y-4 lg:basis-2/5">
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
