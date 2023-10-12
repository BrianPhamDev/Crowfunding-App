import React, { useEffect, useMemo, useState } from "react";
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
import { IconMoney } from "components/icons";
import { Button } from "components/atoms/button";
import useOnChange from "hooks/useOnChange";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { apiUrl } from "config/config";
import { toast } from "react-toastify";
import ImageUpload from "components/atoms/image/ImageUpload";
if (!Quill.imports["modules/ImageUploader"]) {
  Quill.register("modules/ImageUploader", ImageUploader);
}

const categoriesData = ["architecture", "crypto"];

const CampaignAddNew = () => {
  const { control, handleSubmit, setValue, reset, watch } = useForm({
    defaultValues: {},
    mode: "onSubmit",
  });
  const [filterCountry, setFilterCountry] = useOnChange(500);
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const resetValues = () => {
    setStartDate(null);
    setEndDate(null);
    reset({});
  };
  const getDropDownLabel = (name) => {
    return watch(name);
  };
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
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  useEffect(() => {
    async function fetchCountries() {
      try {
        if (!filterCountry) return;
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
        console.log(
          "🚀 ~ file: CampaignAddNew.js:64 ~ fetchCountries ~ response:",
          response.data[0]
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`${apiUrl}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      console.log(
        "🚀 ~ file: CampaignAddNew.js:26 ~ handleAddNewCampaign ~ values",
        values
      );
      toast.success("Add new campaign successfully");
      resetValues();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
      <div className="flex items-center justify-center w-full ">
        <CampaignStart></CampaignStart>
      </div>
      <form
        onSubmit={handleSubmit(handleAddNewCampaign)}
        className="flex flex-col gap-8 mt-10"
      >
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
              <Dropdown.Select placeholder="Select the category">
                {getDropDownLabel("category")}
              </Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={category}
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              placeholder="Write a short description"
              name="description"
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Thumbnail</Label>
            <ImageUpload
              onChange={setValue}
              name="featured-image"
            ></ImageUpload>
          </FormGroup>{" "}
        </FormRow>
        <FormGroup>
          <Label>Story *</Label>
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
        <FormGroup>
          <div className="flex flex-row w-full px-11 py-10 text-white bg-secondary-20 max-w-[1008px] max-h-[120px] items-center gap-6 relative rounded-lg md:my-[20px]">
            <IconMoney></IconMoney>
            <p className="text-2xl font-bold">
              You will get 90% of total raised
            </p>
            <div className=""></div>
          </div>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Raised Amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm text-3">Place Youtube or Vimeo Video URL</p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="method">Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one">
                {getDropDownLabel("method")}
              </Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="country">Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select a country">
                {getDropDownLabel("country")}
              </Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((item) => (
                    <Dropdown.Option
                      key={item?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption("country", item.name.common)
                      }
                    >
                      {item.name.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="start_date">Start Date</Label>
            <DatePicker onChange={setStartDate} value={startDate} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="end_date">End Date</Label>
            <DatePicker onChange={setEndDate} value={endDate} />
          </FormGroup>
        </FormRow>
        <div className="flex items-center justify-center">
          <Button className="" type="submit">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
