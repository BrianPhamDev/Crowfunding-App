import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconEye } from "components/icons";
import * as yup from "yup";
import FormField from "components/molecules/FormField";
import { Label } from "components/atoms/label";
import { Input } from "components/atoms/input";
import useToggleValue from "hooks/useToggle";
import { Button } from "components/atoms/button";

const SignInPage = () => {
  const schema = yup.object({
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password must have at least 8 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Please enter your email"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignIn = (values) => {
    console.log(values);
  };
  const { value: showPassword, handleToggle: handleShowPassword } =
    useToggleValue();
  return (
    <div>
      <LayoutAuthentication heading="Welcome Back!">
        <p className="mb-6 text-xs sm:text-sm text-3 sm:mb-5">
          Already have an account?{" "}
          <Link
            to="/sign-up"
            className="underline text-primary-color sm:text-xs"
          >
            Sign up
          </Link>
        </p>
        <button className="w-full max-w-[430px] h-[52px] gap-[10px] p-3 flex flex-row items-center justify-center border border-whitsh-strock rounded-xl dark:border-dark-stroke">
          <img src="/google-logo.svg" alt="" />
          <p className="text-base font-semibold text-2 dark:text-white">
            Sign up with google
          </p>
        </button>
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex flex-col gap-[15px] sm:gap-[20px] w-full mt-5 sm:mt-3"
        >
          <FormField>
            <Label htmlFor="email">Email *</Label>
            <Input
              control={control}
              name="email"
              placeholder="Enter your email"
              type="email"
              error={errors.email?.message}
            ></Input>
          </FormField>
          <FormField>
            <Label htmlFor="password">Password *</Label>
            <Input
              control={control}
              name="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              error={errors.password?.message}
            >
              <IconEye
                open={showPassword}
                onClick={handleShowPassword}
                toggle={showPassword}
              ></IconEye>
            </Input>
          </FormField>
          <span className="text-sm font-medium text-right text-primary-color">
            Forgot password
          </span>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
