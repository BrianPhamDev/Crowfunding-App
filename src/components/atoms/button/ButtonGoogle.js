import React from "react";
import ErrorComponent from "components/molecules/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

const ButtonGoogle = ({
  text = "Sign up with google",
  logo = "/google-logo.svg",
}) => {
  return (
    <button className="w-full max-w-[430px] h-[52px] gap-[10px] p-3 flex flex-row items-center justify-center border border-whitsh-strock rounded-xl dark:border-dark-stroke">
      <img src={logo} alt="" />
      <p className="text-base font-semibold text-2 dark:text-white">{text}</p>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  logo: PropTypes.string,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
