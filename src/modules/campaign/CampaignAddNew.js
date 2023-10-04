import React, { useMemo, useState } from "react";
import CampaignStart from "./molecules/CampaignStart";
import { FormRow } from "components/atoms/form";
import FormGroup from "components/atoms/form/FormGroup";
import { useForm } from "react-hook-form";
import { Label } from "components/atoms/label";
import { Input, Textarea } from "components/atoms/input";
import { Dropdown } from "components/atoms/dropdown";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
if (!Quill.imports["modules/ImageUploader"]) {
  Quill.register("modules/ImageUploader", ImageUploader);
}
const CampaignAddNew = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
    mode: "onSubmit",
  });
  const [content, setContent] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      ImageUploader: {
        // upload: async (file) => {
        //   const bodyFormData = new FormData();
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "post",
        //     url: imgbbAPI,
        //     data: bodyFormData,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    []
  );

  const handleAddNewCampaign = (values) => {};
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <CampaignStart></CampaignStart>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)} className="mt-10">
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            placeholder="Write a short description"
            name="description"
            control={control}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Short Description *</Label>

          <div className="w-full">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Write your story..."
            />
          </div>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
