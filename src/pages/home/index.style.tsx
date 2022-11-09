import styled from "styled-components";
import { Select, Row, Button } from "antd";
import breakpoints from "../../assets/breakpoint.json";
import colors from "../../assets/colors.json";

export const TopContainer = styled.div`
  padding: 30px;
  display: flex !important;
  flex-direction: column !important;
`;

export const SelectInputContainer = styled.div`
  display: flex;
  margin: 10px;
  text-align: center;
`;

export const SelectInput = styled(Select)`
  width: 100%;
  font-size: 1.5rem;
`;

export const LabelMeasurementSys = styled.div`
  display: flex;
  text-align: center !important;
  align-items: center !important;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const RowMeasurementType = styled(Row)`
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center !important;
  }
`;

export const ButtonAddContainer = styled.div`
  display: flex;
  text-align: center !important;
  align-items: center !important;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center !important;
  }
`;

export const ButtonAdd = styled(Button)`
  background-color: ${colors.primary};
  border-color: ${colors.primary} !important;
  background: ${colors.primary} !important;
  :hover {
    background-color: #f48924;
    border-color: #f48924 !important;
  }
`;
