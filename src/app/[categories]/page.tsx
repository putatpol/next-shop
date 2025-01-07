import CategoriesList from "@/components/categories/Categories-list";
import ProductItems from "@/components/product/ProductItems";
import { ProductsApiResponse } from "@/interface/productsApi.dto";
import noImage from "@images/noImage.png";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categories: string }>;
}) {
  const category = (await params).categories;
  console.log(category);
  const gender = category.includes("womens") ? "womens" : "mens";

  // Route api products(by category)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?category=${category}`,
  );
  const response: ProductsApiResponse = await res.json();
  const productList = response.products;

  return (
    <div className="container mx-auto my-6 px-3 *:py-6 xl:px-0">
      <h2 className="text-center text-5xl font-thin">Collections</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <CategoriesList gender={gender} />
      </div>
      {productList && productList.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <ProductItems productList={productList} />
        </div>
      ) : (
        <p className="text-center text-gray-400">Sorry, No Product Found.</p>
      )}
    </div>
  );
}
