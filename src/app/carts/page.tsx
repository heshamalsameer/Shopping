import { Cart } from "@prisma/client";
import {
  getProductsCart,
  getProductsCartNumber,
} from "@/apiCalls/productApiCall";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CartClientPage from "@/components/cart/CartClientPage"; // New client component

const AboutPage = async () => {
  const token = cookies().get("jwtToken")?.value || "";
  if (!token) redirect("/");

  const productsCart: Cart[] = await getProductsCart(token);
  const numberOfCartData = (await getProductsCartNumber(token)) || 0;

  return (
    <CartClientPage
      productsCart={productsCart}
      // @ts-ignore */}
      numberOfCartData={numberOfCartData}
    />
  );
};

export default AboutPage;
