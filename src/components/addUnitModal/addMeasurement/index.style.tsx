import styled from "styled-components";
import { Input, Row } from "antd";
import breakpoints from "../../../assets/breakpoint.json";

export const RowMeasurementType = styled(Row)`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center !important;
  }
`;
export const LabelAddUnit = styled.div`
  display: flex;
  text-align: center !important;
  align-items: center !important;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center !important;
    font-size: 1.25rem;
  }
  padding-bottom: 1.25rem;
  font-size: 1rem;
`;
export const InputComponent = styled(Input)`
  display: flex;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
  }
`;

export const RowButton = styled(Row)`
  display: flex;
  padding: 1rem;
  justify-content: center;
  width: 100%;
`;
