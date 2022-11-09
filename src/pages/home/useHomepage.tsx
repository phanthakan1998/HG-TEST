import React from "react";
import { Select } from "antd";

import { useTypeMeasurement } from "../../providers/TypeMeasurement";
function useHomepage() {
  const type = useTypeMeasurement();
  const allMeasurement = type.allMeasurement;
  const allProperties = type.allProperties;

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [measurement, setMeasurement] = React.useState<string>("SI");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const MeasurementType: string[] = [];

  return {
    handleCancel,
    showModal,
    measurement,
    isModalOpen,
    setMeasurement,
    MeasurementType,
    setIsModalOpen,
    allMeasurement,
    allProperties,
  };
}

export default useHomepage;
