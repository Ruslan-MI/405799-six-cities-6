import React from 'react';
import LoadingScreen from "../containers/loading-screen";

const withLoad = (Component) => {
  const fn = ({
    isDataLoaded,
    ...props
  }) => {
    return (isDataLoaded && <Component {...props} />) || <LoadingScreen />;
  };
  return fn;
};

export default withLoad;
