"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DeleteProductButtonProps {
  productId: number;
}

const DeleteProductButton = ({ productId }: DeleteProductButtonProps) => {
  const router = useRouter();

  const deleteProductHandler = async () => {
    try {
      if (confirm("you want to delete this product, Are you sure?")) {
        await axios.delete(`${DOMAIN}/api/products/${productId}`);
        toast.success("product deleted");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error?.response?.data.message);
      console.log(error);
    }
  };

  return (
    <div
      onClick={deleteProductHandler}
      className="bg-red-600 text-white rounded-lg cursor-pointer inline-block text-center py-1 px-2 hover:bg-red-800 transition"
    >
      Delete
    </div>
  );
};

export default DeleteProductButton;
