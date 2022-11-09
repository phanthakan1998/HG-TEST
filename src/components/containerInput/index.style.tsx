import styled from "styled-components";
import { Select, Input, Row } from "antd";
import colors from "../../assets/colors.json";
import breakpoints from "../../assets/breakpoint.json";

export const TopContainer = styled.div`
  padding: 30px;
`;

export const InputContainer = styled.div`
  color: black;
  display: flex;
  padding: 10px;
  background-color: ${colors.secondary};
  border-radius: 8px;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 1rem;
`;

export const Title = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResultContainer = styled.div`
  color: ${colors.primary};
  font-size: 1.25rem;
  font-weight: 700;
  overflow: auto;
  display: flex;
  justify-content: center;
`;

export const InputComponent = styled(Input)`
  display: flex;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
  }

  .ant-input ant-input-disabled ant-input-lg K {
    color: red;
  }
`;

export const SelectInput = styled(Select)`
  width: 100%;
  display: flex;
  text-align: center;
  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
  }
`;
export const SelectInputContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
`;

export const SelectInputInCol = styled(Select)`
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const RowInput = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowMeasurementType = styled(Row)`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`;

export const LabelSys = styled.div`
  display: flex;
  padding: 10px;
  text-align: center !important;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center !important;
    font-size: 1rem;
  }
  font-size: 1.2rem;
  font-weight: 500;
`;
