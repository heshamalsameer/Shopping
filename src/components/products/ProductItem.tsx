"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonSpinner from "../ButtonSpinner";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store/store";
import { addToCart } from "../../app/store/cart";

interface ProductItemProps {
  product: Product;
  token: string;
}

const ProductItem = ({ product, token }: ProductItemProps) => {
  const [productIsAdded, setproductIsAdded] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  console.log(product);

  const AddToCart = async () => {
    setLoading(true);
    if (!token) router.replace("/login");

    if (token) {
      try {
        const res = await axios.post(`${DOMAIN}/api/carts`, product);
        dispatch(addToCart(res.data));
        toast.success("Product added To cart");
        setLoading(false);
        router.refresh();
      } catch (error: any) {
        toast.error(error?.response?.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="p-5 rounded-lg my-1 shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4">
      <div>
        <Link href={`/products/${product.id}`} className="cursor-pointer">
          <div className="h-60 overflow-hidden">
            <Image
              width={500}
              height={100}
              className="rounded-lg h-[100%] hover:scale-110 hover:rotate-2 transition duration-500"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {product.title}
            </h3>
            <p className="my-2 text-xl text-gray-700 font-bold p-1 line-clamp-1">
              {product.price}
              {""}$
            </p>
          </div>
        </Link>
      </div>

      <div className="flex justify-between">
        <button
          disabled={productIsAdded}
          onClick={() => {
            AddToCart();
            setproductIsAdded(true);
          }}
          className={`z-10 cursor-pointer bg-blue-600 w-full  rounded-lg p-2
         hover:bg-blue-500 font-bold text-white text-[18px] disabled:bg-blue-300`}
        >
          {loading ? <ButtonSpinner /> : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
