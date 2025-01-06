import CategoriesList from "@/components/categories/Categories-list";
import ProductItems from "@/components/product/ProductItems";
import { ProductApiDto } from "@/interface/productsApi.dto";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categories: string }>;
}) {
  const categories = (await params).categories;
  const gender = categories.includes("womens") ? "womens" : "mens";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`,
  );
  const products: ProductApiDto[] = await res.json();
  console.log(products)

  return (
    <div className="container mx-auto my-6 *:py-6">
      <h2 className="text-center text-5xl font-thin">Collections</h2>
      {/* <h1>{categories} Page</h1> */}

      <div className="flex justify-center space-x-10">
        <CategoriesList gender={gender} />
      </div>
      <ProductItems />
    </div>
  );
}
