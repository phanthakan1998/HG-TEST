import React from "react";
import { MockData } from "../../pages/home/MockData";
import {
  InputContainer,
  Title,
  SelectInput,
  InputComponent,
  SelectInputContainer,
  ResultContainer,
  RowInput,
  SelectInputInCol,
  RowMeasurementType,
  LabelSys,
} from "./index.style";
import { Col, Row, Form, Select } from "antd";
import useProperties from "./useProperties";
import formValidator from "../../assets/formValidator";

type ContainerInputProps = {
  title: string;
  icon?: React.ReactNode;
  measurementSystem: string;
};
const ContainerInput: React.FC<ContainerInputProps> = (props) => {
  const { title, measurementSystem } = props;
  const { Option } = Select;

  const {
    firstValue,
    onChangeFirst,
    setFirstUnitData,
    measurementIndividual,
    setMeasurementIndividual,
    form,
    setSecondUnitData,
    secondValue,
    allMeasurement,
    mockData,
  } = useProperties(measurementSystem, title);

  return (
    <Form form={form}>
      <InputContainer>
        <Row justify="center">
          <Col>
            <Title>{title}</Title>
          </Col>
        </Row>
        <RowMeasurementType gutter={24}>
          <Col xs={24} md={12}>
            <LabelSys>Display result on system of:</LabelSys>
          </Col>
          <Col xs={24} md={12}>
            <SelectInputContainer>
              <SelectInput
                size="large"
                value={measurementIndividual}
                onChange={(value) => setMeasurementIndividual(value as string)}
              >
                {allMeasurement &&
                  allMeasurement.map((value, index) => (
                    <Option value={value} key={value + index}>
                      {value}
                    </Option>
                  ))}
              </SelectInput>
            </SelectInputContainer>
          </Col>
        </RowMeasurementType>
        <RowInput gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              name="firstValue"
              rules={[...formValidator.valueUnit]}
              initialValue={firstValue}
            >
              <InputComponent size="large" onChange={onChangeFirst} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="firstUnit" rules={[{ required: true }]}>
              <SelectInputContainer>
                <SelectInputInCol
                  size="large"
                  onChange={(value) => setFirstUnitData(value as number)}
                  placeholder="Select a unit"
                >
                  {Object.values(mockData[title]).map((value: any) => {
                    return Array.from(value).map((item: any, key) => {
                      return (
                        <Option value={item.formula} key={key + item.title}>
                          {item.title}
                        </Option>
                      );
                    });
                  })}
                </SelectInputInCol>
              </SelectInputContainer>
            </Form.Item>
          </Col>
        </RowInput>

        <RowInput gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item name="secondValue" initialValue={secondValue}>
              {secondValue ? (
                <ResultContainer>{secondValue}</ResultContainer>
              ) : (
                <ResultContainer>-</ResultContainer>
              )}
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="SecondUnit" rules={[{ required: true }]}>
              <SelectInputContainer>
                <SelectInputInCol
                  size="large"
                  onChange={(value) => setSecondUnitData(value as number)}
                  placeholder="Select a unit"
                >
                  {Object.keys(mockData[title]).map((value: any) => {
                    if (value === measurementIndividual) {
                      return Array.from(mockData[title][value]).map(
                        (item: any, key) => {
                          return (
                            <Option value={item.formula} key={key + item.title}>
                              {item.title}
                            </Option>
                          );
                        }
                      );
                    }

                    return null;
                  })}
                </SelectInputInCol>
              </SelectInputContainer>
            </Form.Item>
          </Col>
        </RowInput>
      </InputContainer>
    </Form>
  );
};

export default ContainerInput;
