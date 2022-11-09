import React from "react";
import { Button, Col, Form } from "antd";
import formValidator from "../../../assets/formValidator";
import {
  RowMeasurementType,
  LabelAddUnit,
  InputComponent,
  RowButton,
} from "./index.style";
import useAddUnit from "../useAddUnit";

type AddMeasurementProps = {
  onClose: () => void;
};

const AddMeasurement: React.FC<AddMeasurementProps> = (props) => {
  const { onClose } = props;

  const { onFinishMeasurement, form } = useAddUnit();

  return (
    <Form form={form} onFinish={onFinishMeasurement} autoComplete="off">
      <RowMeasurementType>
        <Col xs={24} md={12}>
          <LabelAddUnit>Add new measurement system.</LabelAddUnit>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="newMeasurement" rules={[...formValidator.system]}>
            <InputComponent size="large" />
          </Form.Item>
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
    </Form>
  );
};

export default AddMeasurement;
