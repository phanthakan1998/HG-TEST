import React from "react";
import { TitleText, SwichContainer } from "./index.style";
import { Form, Modal, Switch, Row, Col } from "antd";
import useAddUnit from "./useAddUnit";
import ChoosingType from "./choosingType";

import AddMeasurement from "./addMeasurement";

type AddUnitModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (value: boolean) => void;
  // allTypeMeasurement: string[];
};

const AddUnitModal: React.FC<AddUnitModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const { form, onChangeToggled, isToggled } = useAddUnit();

  return (
    <Form form={form}>
      <Modal
        title={
          <>
            <Row>
              <Col>
                <SwichContainer>
                  <Switch defaultChecked onChange={onChangeToggled} />
                </SwichContainer>
              </Col>
              <Col>
                {isToggled ? (
                  <TitleText>Add Unit.</TitleText>
                ) : (
                  <TitleText>Add Measurement.</TitleText>
                )}
              </Col>
            </Row>
          </>
        }
        open={isOpen}
        onCancel={onClose}
        footer={null}
      >
        {isToggled ? (
          <ChoosingType onClose={onClose} />
        ) : (
          <AddMeasurement onClose={onClose} />
        )}
      </Modal>
    </Form>
  );
};

export default AddUnitModal;
