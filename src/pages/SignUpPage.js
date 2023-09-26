import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Label from "components/atoms/label/Label";
import { Input } from "components/atoms/input";
import FormField from "components/molecules/FormField";
import { Button } from "components/atoms/button";
// import Button from "components/atoms/button/Button";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {},
  });
  const handleSignUp = (values) => {
    console.log(values);
  };
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
          onSubmit={handleSubmit(handleSignUp)}
          className="flex flex-col gap-[10px] w-full"
        >
          <FormField>
            <Label htmlFor="fullname">Full Name *</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your full name"
            ></Input>
          </FormField>
          <FormField>
            <Label htmlFor="email">Email *</Label>
            <Input
              control={control}
              name="email"
              placeholder="Enter your email"
              type="email"
            ></Input>
          </FormField>
          <FormField>
            <Label htmlFor="password">Password *</Label>
            <Input
              control={control}
              name="password"
              placeholder="Enter your password"
              type="password"
            ></Input>
            <div className="flex items-start gap-5 my-5">
              <span className="inline-block w-5 h-5 border rounded-md border-1"></span>
              <p className="flex-1 text-sm font-normal text-2">
                I agree to the{" "}
                <span className="underline cursor-pointer text-secondary-color">
                  Tearms of Use
                </span>{" "}
                and have read and understand the{" "}
                <span className="underline cursor-pointer text-secondary-color">
                  Privacy policy
                </span>
              </p>
            </div>
            <Button className="w-full" type="submit">
              Create my account
            </Button>
          </FormField>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
