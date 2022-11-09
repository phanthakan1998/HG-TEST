import React from "react";
import { Button, Col, Select, Form, Divider } from "antd";
import {
  LabelAddUnit,
  SelectInputContainer,
  SelectInput,
  RowMeasurementType,
  DetailText,
  InputComponent,
  RowButton,
} from "./index.style";
import useAddUnit from "../useAddUnit";
import formValidator from "../../../assets/formValidator";

type ChoosingTypeProps = {
  onClose: () => void;
};

const ChoosingType: React.FC<ChoosingTypeProps> = (props) => {
  const {
    setSelectType,
    typeUnit,
    selectedType,
    setSelectedSystem,
    selectedSystem,
    allSystem,
    form,
    selectedUnit,
    onFinish,
  } = useAddUnit();

  const { Option } = Select;
  const { onClose } = props;

  return (
    <Form form={form} onFinish={onFinish} autoComplete="off">
      <RowMeasurementType>
        <Col xs={24} md={12}>
          <LabelAddUnit>Type of measurement.</LabelAddUnit>
        </Col>
        <Col xs={24} md={12}>
          <SelectInputContainer>
            <SelectInput
              size="large"
              placeholder={"select type."}
              onChange={setSelectType}
              value={selectedType}
            >
              {Object.keys(typeUnit).map((item, index) => {
                return (
                  <Option key={index} value={item}>
                    {item}
                  </Option>
                );
              })}
            </SelectInput>
          </SelectInputContainer>
        </Col>
      </RowMeasurementType>
      <RowMeasurementType>
        <Col xs={24} md={12}>
          <LabelAddUnit>Type of measurement system.</LabelAddUnit>
        </Col>
        <Col xs={24} md={12}>
          <SelectInputContainer>
            <SelectInput
              size="large"
              placeholder={"select type."}
              onChange={(value) => setSelectedSystem(value as string)}
              value={selectedSystem}
            >
              {allSystem &&
                allSystem.map((value) => (
                  <Option value={value} key={value}>
                    {value}
                  </Option>
                ))}
            </SelectInput>
          </SelectInputContainer>
        </Col>
        <Divider></Divider>

        {selectedSystem ? (
          <>
            <RowMeasurementType gutter={24}>
              <Col span={1}>
                <LabelAddUnit>1</LabelAddUnit>
              </Col>
              <Col xs={24} md={7}>
                <Form.Item name="newUnit" rules={[...formValidator.unit]}>
                  <InputComponent size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={1}>
                <LabelAddUnit> = </LabelAddUnit>
              </Col>
              <Col xs={24} md={9}>
                <Form.Item
                  name="valueNewUnit"
                  rules={[...formValidator.valueUnit]}
                >
                  <InputComponent size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} md={5}>
                <LabelAddUnit> {selectedUnit}</LabelAddUnit>
              </Col>
            </RowMeasurementType>
            <RowMeasurementType gutter={24}>
              <Col span={24}>
                <DetailText>
                  - First input you have to enter name of new unit.
                </DetailText>
              </Col>

              <Col span={24}>
                <DetailText>
                  - Second input you have to enter value that compare to default
                  unit.
                </DetailText>
              </Col>
              <Col span={24}>
                <DetailText>
                  ex: 1 inch = 0.0254 meter. so you have to enter inch in first
                  input and 0.0254 in second input.
                </DetailText>
              </Col>
            </RowMeasurementType>
            <RowButton gutter={24}>
              <Col xs={10} md={4}>
                <Button onClick={onClose}>cancel</Button>
              </Col>
              <Col span={2}></Col>
              <Col xs={10} md={4}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </RowButton>
          </>
        ) : (
          <RowMeasurementType gutter={24}>
            <Col span={24}>
              <DetailText>Please select type of measurement first.</DetailText>
            </Col>
          </RowMeasurementType>
        )}
      </RowMeasurementType>
    </Form>
  );
};

export default ChoosingType;
