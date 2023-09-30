import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Label from "components/atoms/label/Label";
import { Input } from "components/atoms/input";
import FormField from "components/molecules/FormField";
import { Button, ButtonGoogle } from "components/atoms/button";
import { Checkbox } from "components/atoms/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEye } from "components/icons";
import useToggleValue from "hooks/useToggle";

const SignUpPage = () => {
  const schema = yup.object({
    name: yup.string().required("Please enter your full name"),
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

  const handleSignUp = (values) => {
    console.log(values);
  };

  const { value: showPassword, handleToggle: handleShowPassword } =
    useToggleValue();
  const { value: acceptTerm, handleToggle: handleToggleTerm } =
    useToggleValue();

  return (
    <div>
      <LayoutAuthentication heading="Sign Up">
        <p className="mb-6 text-xs sm:text-sm text-3 sm:mb-5">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="underline text-primary-color sm:text-xs"
          >
            Sign in
          </Link>
        </p>
        <ButtonGoogle></ButtonGoogle>
        <p className="flex-1 text-xs sm:text-sm text-center text-2 p-[10px] sm:p-[5px] dark:text-white">
          Or sign up with email
        </p>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="flex flex-col gap-[15px] sm:gap-[20px] w-full"
        >
          <FormField>
            <Label htmlFor="fullname">Full Name *</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your full name"
              error={errors.name?.message}
            ></Input>
          </FormField>
          <FormField>
            <Label htmlFor="email">Email *</Label>
            <Input
              control={control}
              name="email"
              placeholder="Enter your email"
              type="email"
              error={errors?.email?.message}
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
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
            className="my-5"
          >
            <p className="text-xs font-normal sm:text-sm text-2 dark:text-3">
              I agree to the{" "}
              <span className="underline cursor-pointer text-secondary-color">
                Tearms of Use
              </span>{" "}
              and have read and understand the{" "}
              <span className="underline cursor-pointer text-secondary-color">
                Privacy policy
              </span>
            </p>
          </Checkbox>
          <Button className="w-full" type="submit">
            Create my account
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
