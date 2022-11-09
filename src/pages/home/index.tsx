import React from "react";
import {
  TopContainer,
  SelectInputContainer,
  SelectInput,
  LabelMeasurementSys,
  RowMeasurementType,
  ButtonAdd,
  ButtonAddContainer,
} from "./index.style";
import { Col, Row, Select } from "antd";
import AddUnitModal from "../../components/addUnitModal";
import useHomepage from "./useHomepage";

import ContainerInput from "../../components/containerInput";

const HomePage: React.FC<{}> = () => {
  const {
    handleCancel,
    showModal,
    measurement,
    setMeasurement,
    isModalOpen,
    allMeasurement,
    setIsModalOpen,
    allProperties,
  } = useHomepage();
  const { Option } = Select;

  return (
    <TopContainer>
      <RowMeasurementType>
        <Col>
          <LabelMeasurementSys>Measurement System</LabelMeasurementSys>
        </Col>
        <Col xs={20} md={5} lg={5}>
          <SelectInputContainer>
            <SelectInput
              size="large"
              value={measurement}
              onChange={(value) => setMeasurement(value as string)}
            >
              {allMeasurement &&
                allMeasurement.map((value) => (
                  <Option value={value} key={value}>
                    {value}
                  </Option>
                ))}
            </SelectInput>
          </SelectInputContainer>
        </Col>
        <Col xs={24} md={8} lg={10}>
          <ButtonAddContainer>
            <ButtonAdd type="primary" onClick={showModal} size={"large"}>
              Add unit or measurement.
            </ButtonAdd>
          </ButtonAddContainer>
        </Col>
      </RowMeasurementType>

      <Row gutter={24}>
        {allProperties &&
          allProperties.map((value, index) => (
            <Col xs={24} md={12} key={index}>
              <ContainerInput
                key={value}
                title={value}
                measurementSystem={measurement}
              />
            </Col>
          ))}
      </Row>
      <AddUnitModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        setIsOpen={setIsModalOpen}
      />
    </TopContainer>
  );
};

export default HomePage;
