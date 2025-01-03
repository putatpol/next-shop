import MenList from "@/components/categories/Men-list";
import WomenList from "@/components/categories/Women-list";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categories: string }>;
}) {
  const categories = (await params).categories;

  return (
    <div className="my-6 *:py-6">
      <h2 className="text-center text-5xl font-thin">Collections</h2>
      {/* <h1>{categories} Page</h1> */}

      <div className="flex justify-center space-x-10">
        <MenList />
      </div>
    </div>
  );
}
