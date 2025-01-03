import Image from "next/image";
import imgStore from "@images/banner-store.png";
import CategoriesList from "../categories/Categories-list";

const HomeCollections = () => {
  return (
    <div className="mt-40 bg-white">
      <Image src={imgStore} alt="Image Store" />
      <div className="flex justify-end px-52 py-24">
        <div>
          <h2 className="text-5xl font-thin">Collections</h2>
          <div className="mt-10 flex justify-between">
            <div>
              <h4>Mens</h4>
              <ul className="mt-5 space-y-3">
                <CategoriesList gender={"mens"} />
              </ul>
            </div>
            <div>
              <h4>Womens</h4>
              <ul className="mt-5 space-y-3">
                <CategoriesList gender={"womens"} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCollections;
