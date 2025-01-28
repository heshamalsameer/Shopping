import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";
import { SingleProduct } from "@/utils/types";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import { getSingleProduct } from "@/apiCalls/productApiCall";

interface SingleProductPageProps {
  params: { Id: string };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  const product: SingleProduct = await getSingleProduct(params.Id);

  return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="flex flex-col lg:flex-row bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[400px] max-w-[100%] lg:max-w-[50%]"
        />
        <div className=" p-7 rounded-lg mb-7 max-w-[100%]">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">
            {product.title}
          </h1>
          <div className="text-gray-400">
            {/* {new Date(article.createdAt).toDateString()} */}
            {product.price}$
          </div>
          <p className="text-gray-800 text-x   mt-5">{product.description}</p>
        </div>
      </div>
      <div className="mt-7">
        {payload ? (
          <AddCommentForm articleId={product.id} />
        ) : (
          <p className="text-blue-600 md:text-xl">
            to write a comment you should log in first
          </p>
        )}
      </div>
      <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
        Comments
      </h4>
      {product.comments.map((comment, index) => (
        <CommentItem key={comment.id} comment={comment} userId={payload?.id} />
      ))}
    </section>
  );
};

export default SingleProductPage;
