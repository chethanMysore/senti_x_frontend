/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";
import Error404 from "components/Error404";

const ErrorBoundary = (props) => {
  if (props.isError) {
    return <Route render={(props) => <Error404 {...props} />} />;
  }
  return props.children;
};

export default ErrorBoundary;
