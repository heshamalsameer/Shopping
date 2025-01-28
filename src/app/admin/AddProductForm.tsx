"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { addProduct } from "@/app/store/product";
import ButtonSpinner from "@/components/ButtonSpinner";
import UploadImage from "@/components/UploadImage";

const AddProductForm = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e: any) => {
    setisLoading(false);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(formData);
  };

  // function onImageChange({ imageUrl }: any) {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: imageUrl,
  //   }));
  // }

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setisLoading(true);
    // const form = new FormData();
    // form.append("title", formData.title);
    // form.append("description", formData.description);
    // form.append("price", formData.price);
    // form.append("image", formData.image);
    // form.append("image", formData.image);
    if (formData.title === "") return toast.error("Title is required");
    if (formData.price === "") return toast.error("Price is required");

    try {
      // console.log(formData);

      const res = await axios.post(`${DOMAIN}/api/products`, formData);
      console.log(res);

      dispatch(addProduct(res.data));
      // setFormData({
      //   title: "",
      //   description: "",
      //   price: "",
      //   image: "",
      // });
      toast.success("New product added");
      setisLoading(false);
      router.refresh();
    } catch (error: any) {
      setisLoading(false);
      toast.error(error?.response?.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        // action={create}
        className="flex flex-col"
      >
        <input
          className="mb-4 border rounded p-2 text-xl"
          type="text"
          name="title"
          value={formData.title}
          placeholder="Enter Product Title"
          onChange={handleChange}
        />
        <input
          className="mb-4 border rounded p-2 text-xl"
          type="number"
          name="price"
          value={formData.price}
          placeholder="Enter Product Price"
          onChange={handleChange}
        />
        <UploadImage setFormData={setFormData} />
        {/* <input
        className="mb-4 border rounded p-2 text-xl"
        type="file"
        name="image"
        placeholder="Enter Product Image"
        accept="image/*"
        onChange={onImageChange}
      /> */}
        <textarea
          className="mb-4 p-2 lg:text-xl rounded resize-none"
          rows={5}
          placeholder="Enter Product Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold"
        >
          {isLoading ? <ButtonSpinner /> : "Add"}
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
