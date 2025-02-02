import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductCartType } from "@/interface/productsApi.dto";
import { useDispatch } from "react-redux";
import {
  removeProductCart,
  updateProductQuantity,
} from "@/redux/slices/productCartSlice";
import Link from "next/link";

type Props = {
  products: ProductCartType[];
  closeMenu: () => void;
};

const ProductCart = ({ products, closeMenu }: Props) => {
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
                  {/* Product Name */}
                  <h3 className="line-clamp-1 text-sm font-semibold">
                    {item.products.title}
                  </h3>

                  {/* Total Price */}
                  <p className="text-sm">$ {item.totalPrice.toFixed(2)}</p>

                  {/* Button Quantity */}
                  <div className="flex items-center gap-2 [&_button]:mt-2 [&_button]:rounded-lg [&_button]:border [&_button]:border-gray-300 [&_button]:px-2">
                    <button
                      onClick={() => {
                        const newQuantity = Math.max(item.quantity - 1, 1);
                        dispatch(
                          updateProductQuantity({
                            id: item.products.id,
                            quantity: newQuantity,
                          }),
                        );
                      }}
                    >
                      -
                    </button>
                    <p className="mx-2 text-xs">Qty: {item.quantity}</p>
                    <button
                      onClick={() => {
                        const newQuantity = item.quantity + 1;
                        dispatch(
                          updateProductQuantity({
                            id: item.products.id,
                            quantity: newQuantity,
                          }),
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Button Delete */}
                <button
                  className="ml-4 flex items-center duration-300 ease-out hover:scale-110 hover:text-red-600"
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

              <button className="w-full rounded-full border border-black py-2 duration-300 ease-out hover:bg-black hover:text-white">
                <Link
                  href={"/checkout"}
                  className="w-full text-center"
                  onClick={closeMenu}
                >
                  <p>Check Out</p>
                </Link>
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
