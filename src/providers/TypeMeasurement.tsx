import React from "react";
import { MockData } from "../pages/home/MockData";
import { IDetail } from "../interface/Massurement";

const TypeMeasurement = React.createContext<{
  allMeasurement: string[];
  allProperties: string[];
  mockupData: any;
  setMockupData: React.Dispatch<React.SetStateAction<any>>;
}>({
  allMeasurement: [],
  allProperties: [],
  mockupData: {},
  setMockupData: () => {},
});

function TypeMeasurementProvider({ children }: { children: React.ReactNode }) {
  const [allMeasurement, setAllMeasurement] = React.useState<string[]>([]);
  const [allProperties, setAllProperties] = React.useState<string[]>([]);
  const [mockupData, setMockupData] = React.useState<any>(MockData);

  const fetchAllProperties = React.useCallback(() => {
    const PropertiesType: string[] = [];
    const SystemType: string[] = [];

    Object.entries(mockupData).forEach((value: any[]) => {
      PropertiesType.push(value[0]);

      Object.keys(value[1]).forEach((key) => {
        if (SystemType.indexOf(key) === -1) {
          SystemType.push(key);
        }
      });
    });
    setAllProperties(PropertiesType);
    setAllMeasurement(SystemType);
  }, [mockupData]);

  React.useEffect(() => {
    fetchAllProperties();
  }, [fetchAllProperties]);

  return (
    <TypeMeasurement.Provider
      value={{
        allMeasurement,
        allProperties,
        mockupData,
        setMockupData,
      }}
    >
      {children}
    </TypeMeasurement.Provider>
  );
}

export const useTypeMeasurement = () => React.useContext(TypeMeasurement);
export default TypeMeasurementProvider;
