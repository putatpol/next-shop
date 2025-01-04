import Image from "next/image";
import img from "@images/sc-shoes.png";

const ProductInfoImage = () => {
  return (
    <>
      <div className="grid w-2/5 grid-cols-3 gap-2">
        <div className="col-span-3 justify-items-center">
          <Image
            src={img}
            alt="Product image Sec1"
            className="w-full object-cover"
          />
        </div>
        <Image src={img} alt="Product image Sec1" />
        <Image src={img} alt="Product image Sec2" />
        <Image src={img} alt="Product image Sec3" />
      </div>
    </>
  );
};

export default ProductInfoImage;
