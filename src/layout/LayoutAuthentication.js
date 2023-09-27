import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/molecules/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-whitsh-lite isolate">
      <img
        src="/ellipse-background.png"
        alt="bg-ellipse"
        className="absolute bottom-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-16 sm:mb-5">
        <img src="/logo.svg" alt="logo-brand" />
      </Link>
      <div className="w-full max-w-[556px] bg-white px-[60px] py-[50px] rounded-[10px] flex gap-[10px] mx-auto items-center justify-center flex-col">
        <h1 className="text-xl font-semibold sm:text-lg text-1">{heading}</h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
