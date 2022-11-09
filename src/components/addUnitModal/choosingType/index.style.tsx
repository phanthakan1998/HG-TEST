import styled from "styled-components";
import { Input, Select, Row } from "antd";
import breakpoints from "../../../assets/breakpoint.json";
import colors from "../../../assets/colors.json";

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

export const SelectInputContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;

  @media (min-width: ${breakpoints.laptop}) {
    width: 8rem;
  }

  @media (min-width: ${breakpoints.lagreLaptop}) {
    width: 10rem;
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

export const RowButton = styled(Row)`
  display: flex;
  padding: 1rem;
  justify-content: center;
  width: 100%;
`;

export const RowMeasurementType = styled(Row)`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center !important;
  }
`;
export const InputComponent = styled(Input)`
  display: flex;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
  }
`;

export const DetailText = styled.div`
  color: ${colors.primary};
  padding: 10px 0 10px 0;
  font-size: 1rem;
`;
