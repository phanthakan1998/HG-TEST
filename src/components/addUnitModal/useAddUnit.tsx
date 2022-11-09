import { Form } from "antd";
import React from "react";
import Swal from "sweetalert2";
import * as swlConfig from "../../assets/sweetalert.config";
import { IDetail } from "../../interface/Massurement";
import { useTypeMeasurement } from "../../providers/TypeMeasurement";

function useAddUnit(allTypeMeasurement?: string[]) {
  const [form] = Form.useForm();
  const [selectedType, setSelectedType] = React.useState<string>("Length");
  const [selectedUnit, setSelectedUnit] = React.useState<string>("meter");
  const [selectedSystem, setSelectedSystem] = React.useState<string>("");
  const [allSystem, setAllSystem] = React.useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const [isToggled, setIsToggled] = React.useState(true);
  const useMeasurement = useTypeMeasurement();
  const allMeasurement = useMeasurement.allMeasurement;
  const mockData = useMeasurement.mockupData;
  const setMockupData = useMeasurement.setMockupData;

  const typeUnit: object = {
    Length: "meter",
    Area: "sq. meter",
    Volume: "cubic meter",
    Speed: "kilogram",
  };

  const onChangeToggled = (checked: boolean) => {
    setIsToggled(checked);
  };

  const setSelectType = (value: any) => {
    setSelectedType(value);
    const data = Object(typeUnit)[value];
    setSelectedUnit(data);
  };

  React.useEffect(() => {
    const MeasurementType: string[] = [];

    Object.keys(mockData[selectedType]).forEach((value) => {
      if (MeasurementType.indexOf(value) === -1) {
        MeasurementType.push(value);
      }
    });

    setAllSystem(MeasurementType);
  }, [mockData, selectedType]);

  const onFinish = async (values: any) => {
    const newUnit: IDetail = {
      title: values.newUnit,
      formula: Number(values.valueNewUnit),
    };
    let isDuplicate = false;
    let isSameValue = false;

    const { isConfirmed } = await Swal.fire(
      swlConfig.confirmation({
        title: "Please confirm to add more unit?",
        text: "Please enter confirm ",
      })
    );

    if (isConfirmed) {
      Array.from(mockData[selectedType][selectedSystem]).forEach(
        (value: any) => {
          if (newUnit.title.toLowerCase() === value.title.toLowerCase()) {
            isDuplicate = true;
          }
          if (newUnit.formula === value.formula) {
            isSameValue = true;
          }
        }
      );

      if (isDuplicate === false && isSameValue === false) {
        setMockupData((prev: any) => {
          prev[selectedType][selectedSystem].push(newUnit);
          return prev;
        });

        Swal.fire(swlConfig.successConfirmation({ title: "Success" }));
      } else {
        if (isDuplicate) {
          Swal.fire(
            swlConfig.warningConfirmation({
              title: "This unit is alreay exist.",
            })
          );
        }
        if (isSameValue) {
          Swal.fire(
            swlConfig.warningConfirmation({
              title: "This unit is alreay exist.",
            })
          );
        } else {
          Swal.fire(
            swlConfig.warningConfirmation({
              title: "Fail to add unit.",
            })
          );
        }
      }
    }
  };

  const onFinishMeasurement = async (values: any) => {
    let isDuplicate = false;
    const { isConfirmed } = await Swal.fire(
      swlConfig.confirmation({
        title: "Please confirm to add more system?",
        text: "Please enter confirm  ",
      })
    );

    if (isConfirmed) {
      Array.from(allMeasurement).forEach((value: any) => {
        if (values.newMeasurement.toLowerCase() === value.toLowerCase()) {
          isDuplicate = true;
        }
      });
      if (!isDuplicate) {
        Object.keys(mockData).forEach((value) => {
          mockData[value][values.newMeasurement] = [];
        });
        allMeasurement.push(values.newMeasurement);
        Swal.fire(swlConfig.successConfirmation({ title: "Success" }));
      } else {
        Swal.fire(
          swlConfig.warningConfirmation({
            title: "This system is alreay exist.",
          })
        );
      }
    }
  };

  return {
    selectedType,
    setSelectType,
    typeUnit,
    setSelectedSystem,
    selectedSystem,
    allSystem,
    form,
    selectedUnit,
    onFinish,
    isOpenModal,
    setIsOpenModal,
    onChangeToggled,
    isToggled,
    onFinishMeasurement,
  };
}

export default useAddUnit;
