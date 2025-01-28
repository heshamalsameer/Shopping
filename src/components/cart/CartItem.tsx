"use client";
import { Cart } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import DeleteProductModal from "./DeleteCartItemModal";

interface CartItemProps {
  product: Cart;
}

const CartItem = ({ product }: CartItemProps) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row cursor-pointer justify-between items-center
       hover:bg-slate-200 rounded-lg mx-8 p-5 gap-5"
      >
        <DeleteProductModal
          isOpen={isOpen}
          setIsopen={setisOpen}
          productId={product.id}
        />
        <Image
          width={500}
          height={500}
          className="md:w-40 md:h-40 w-48 h-48  md:rounded-full rounded-full "
          src={product.image}
          alt={product.title}
        />
        <h3 className="text-[30px] text-gray-500">{product.title}</h3>
        <p className="text-[30px] text-gray-500">{product.price}$</p>
        <button
          onClick={() => setisOpen(true)}
          className="bg-red-700 hover:bg-red-500 p-2 px-5 rounded-lg cursor-pointer text-white text-[25px]"
        >
          Delete item
        </button>
      </div>

      <div className="w-full h-[2px] rounded-md bg-slate-400 "></div>
    </>
  );
};

export default CartItem;
