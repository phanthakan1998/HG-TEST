import { Form } from "antd";
import React from "react";
import { useTypeMeasurement } from "../../providers/TypeMeasurement";

function useProperties(measurementSystem: string, title: string) {
  const [form] = Form.useForm();
  const [firstUnitData, setFirstUnitData] = React.useState<number>(0);
  const [secondUnitData, setSecondUnitData] = React.useState<number>(0);
  const [firstValue, setFirstValue] = React.useState<number>(0);
  const [secondValue, setSecondValue] = React.useState<number>(0);
  const [measurementIndividual, setMeasurementIndividual] =
    React.useState<string>("SI");

  const useMeasurement = useTypeMeasurement();
  const allMeasurement = useMeasurement.allMeasurement;
  const mockData = useMeasurement.mockupData;

  React.useEffect(() => {
    setMeasurementIndividual(measurementSystem);
  }, [measurementSystem]);

  const onChangeFirst = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstValue(Number(e.target.value));
    },
    []
  );

  React.useEffect(() => {
    form.setFieldsValue({ [`SecondValue`]: secondValue });
  }, [form, secondValue]);

  React.useEffect(() => {}, [firstUnitData]);
  React.useEffect(() => {
    const result = ((firstValue / firstUnitData) * secondUnitData).toFixed(4);
    setSecondValue(Number(result));
  }, [firstValue, firstUnitData, secondUnitData, secondValue]);

  return {
    onChangeFirst,
    firstUnitData,
    secondUnitData,
    firstValue,
    secondValue,
    setFirstUnitData,
    setSecondUnitData,
    setMeasurementIndividual,
    measurementIndividual,
    form,
    allMeasurement,
    mockData,
  };
}

export default useProperties;
