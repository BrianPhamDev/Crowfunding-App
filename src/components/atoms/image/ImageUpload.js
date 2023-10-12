import axios from "axios";
import { imgbbAPI } from "config/config";
import React from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const bodyFormData = new FormData();
    console.log(e.target.files[0]);
    bodyFormData.append("image", e.target.files[0]);
    if (!e.target.files[0]) return;
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Upload image failed");
      return;
    }
    const imageObj = {
      medium: imageData.medium,
      thumb: imageData.thumb,
      url: imageData.url,
    };
    console.log(response.data.data);
    onChange(name, imageObj);
  };
  return (
    <label className="w-full px-6 py-4 text-sm font-medium border rounded-lg text-1 placeholder:text-4 dark:border-dark-stroke dark:bg-dark-bg dark:text-white dark:placeholder:text-2  min-h-[140px] outline-none cursor-pointer flex items-center justify-center">
      <input type="file" onChange={handleUploadImage} className="hidden" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
