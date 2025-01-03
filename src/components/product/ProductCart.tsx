import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductCartType } from "@/interface/productsApi.dto";
import { useDispatch } from "react-redux";
import { removeProductCart } from "@/redux/slices/productCartSlice";

type Props = {
  products: ProductCartType[];
};

const ProductCart = ({ products }: Props) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = (id: number) => {
    dispatch(removeProductCart(id));
  };
  return (
    <>
      {products && products.length > 0 ? (
        <>
          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-b border-gray-200 p-4"
            >
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  src={item.products.images[0]}
                  alt="Product Image"
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="ml-4 flex-1">
                <h3 className="line-clamp-1 text-sm font-semibold">
                  {item.products.title}
                </h3>
                <p className="text-sm text-rose-500">$ {item.totalPrice}</p>
                <p className="text-sm">
                  <small>จำนวน : {item.quantity}</small>
                </p>
              </div>
              <button
                className="ml-4 flex items-center"
                onClick={() => handleDeleteProduct(item.products.id)}
              >
                <FontAwesomeIcon icon={faTrash} className="size-3" />
              </button>
            </div>
          ))}
        </>
      ) : (
        <p className="border-b p-4 text-center text-gray-500">ยังไม่มีสินค้า</p>
      )}
    </>
  );
};

export default ProductCart;