import { getSingleProduct } from "@/apiCalls/productApiCall";
import { verifyTokenForPage } from "@/utils/verifyToken";
import { Product } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditProductFrom from "./EditProductFrom";

interface EditProductProps {
  params: { id: string };
}

const EditProductPage = async ({ params }: EditProductProps) => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) redirect("/");

  const payload = verifyTokenForPage(token);
  if (payload?.isAdmin === false) redirect("/");

  const article: Product = await getSingleProduct(params.id);

  return (
    <section className="fix-height flex items-center justify-center px-5 lg:px-20">
      <div className="shadow p-4 bg-purple-200 rounded w-full">
        <h2 className="text-2xl text-green-700 font-semibold mb-4">
          Edit Product
        </h2>
        <EditProductFrom product={article} />
      </div>
    </section>
  );
};

export default EditProductPage;
