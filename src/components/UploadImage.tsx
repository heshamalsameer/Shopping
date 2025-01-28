import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadImage = ({ setFormData }: any) => {
  return (
    <CldUploadWidget
      uploadPreset="bh2002d18q"
      onSuccess={(result, { widget }) => {
        console.log(result);
        // @ts-ignore */}
        setFormData((prevData) => ({
          ...prevData,
          // @ts-ignore */}
          image: result?.info.secure_url,
        }));
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          //   setimageUrl(undefined);
          open();
        }
        return (
          <button
            type="submit"
            className="text-lg w-fill lg:w-1/5 mb-4 text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold"
            onClick={handleOnClick}
          >
            Upload Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadImage;
