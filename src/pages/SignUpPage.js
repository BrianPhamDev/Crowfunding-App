import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Label from "../components/atoms/label/Label";
import Input from "../components/atoms/input/Input";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {},
  });
  return (
    <div>
      <LayoutAuthentication heading="Sign Up">
        <p className="mb-5 text-sm text-3 sm:mb-6">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="underline text-primary-color sm:text-xs"
          >
            Sign in
          </Link>
        </p>
        <button className="w-full max-w-[430px] h-[52px] gap-[10px] p-3 flex flex-row items-center justify-center outline outline-whitsh-strock outline-1 rounded-xl">
          <img src="/google-logo.svg" alt="" />
          <p className="text-base text-2">Sign up with google</p>
        </button>
        <p className="text-sm sm:text-xs font-normal text-center text-2 p-[10px] sm:p-[5px]">
          Or sign up with email
        </p>
        <form
          onSubmit={handleSubmit()}
          className="flex flex-col gap-[10px] w-full"
        >
          <Label>Full Name *</Label>
          <Input control={control} name="fullname"></Input>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
