"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { addCartProducts } from "@/app/store/cart";
import CartItem from "@/components/cart/CartItem";
import { Cart } from "@prisma/client";

interface AboutClientPageProps {
  productsCart: Cart[];
  numberOfCartData: number;
}

const CartClientPage: React.FC<AboutClientPageProps> = ({
  productsCart,
  numberOfCartData,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch cart products to Redux
    dispatch(addCartProducts(productsCart));
  }, [productsCart, dispatch]);

  return (
    <section className="container fix-height m-auto px-5">
      <div></div>
      <div className="flex items-center justify-center flex-wrap gap-7 mt-10">
        {numberOfCartData != 0 ? (
          productsCart.map((item, index) => (
            <CartItem product={item} key={index} />
          ))
        ) : (
          <div className="font-bold text-5xl mt-28">
            There are no products in your cart ...!
          </div>
        )}
      </div>
    </section>
  );
};

export default CartClientPage;
