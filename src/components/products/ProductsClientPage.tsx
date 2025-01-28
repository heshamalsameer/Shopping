"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { addProducts } from "@/app/store/product";
import SearchProductInput from "@/components/products/SearchProductInput";
import Pagination from "@/components/products/Pagination";
import ProductItem from "@/components/products/ProductItem";
import { Product } from "@prisma/client";

interface ProductsClientPageProps {
  products: Product[];
  pages: number;
  pageNumber: number;
  token: string;
  payload: any;
}

const ProductsClientPage: React.FC<ProductsClientPageProps> = ({
  products,
  pages,
  pageNumber,
  token,
  payload,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch products to Redux
    // @ts-ignore */}
    dispatch(addProducts(products));
  }, [products, dispatch]);

  return (
    <section className="container  fix-height m-auto px-5">
      <SearchProductInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {products.map((item, index) => (
          <ProductItem product={item} key={index} token={token} />
        ))}
      </div>
      <Pagination pageNumber={pageNumber} route="/products" pages={pages} />
    </section>
  );
};

export default ProductsClientPage;
