import React from "react";
import LoadingScreen from "../components/containers/loading-screen";

const withLoad = (Component) => {
  const withLoadInnerFunction = ({
    isDataLoaded,
    ...props
  }) => {
    return (isDataLoaded && <Component {...props} />) || <LoadingScreen />;
  };
  return withLoadInnerFunction;
};

export default withLoad;
