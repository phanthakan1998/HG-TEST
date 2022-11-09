import React from "react";
import { LayoutProvider, useLayoutFeature } from "./layouts";
import TypeMeasurementProvider from "./TypeMeasurement";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const layouts = useLayoutFeature();

  return (
    <TypeMeasurementProvider>
      <LayoutProvider value={layouts}>{children}</LayoutProvider>
    </TypeMeasurementProvider>
  );
};

export default Providers;
