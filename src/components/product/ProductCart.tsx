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

  const calculatePrice = () => {
    const total = products.reduce((total, item) => total + item.totalPrice, 0);
    return total.toFixed(2);
  };
  return (
    <div className="w-screen">
      <div className="container mx-auto py-3">
        {/* Header Cart */}
        <div className="flex items-center border-b border-gray-200 bg-background p-4 py-2">
          <div className="flex items-center gap-2 font-semibold ordinal">
            <p>Product Cart</p>
            <small>({products.length})</small>
          </div>
        </div>

        {products && products.length > 0 ? (
          <>
            {/* Body cart */}
            {products.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b border-gray-200 bg-background p-4"
              >
                <div className="h-16 w-16 flex-shrink-0 bg-[--bgProductItems]">
                  <Image
                    src={item.products.thumbnail}
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
                  <p className="text-sm">$ {item.totalPrice}</p>
                  <p className="text-sm text-gray-500">
                    <small>Qty : {item.quantity}</small>
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

            {/* Footer Cart */}
            <div className="flex flex-col space-y-2 px-5 py-4 *:flex *:items-center *:justify-between">
              <div>
                <small>Subtotal</small>
                <p className="font-bold">$ {calculatePrice()}</p>
              </div>

              <button className="w-full rounded-full border border-black py-2 hover:bg-black hover:text-white">
                <p className="w-full text-center">Check Out</p>
              </button>
            </div>
          </>
        ) : (
          <p className="p-4 text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
