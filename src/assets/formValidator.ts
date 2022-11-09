import { Rule } from "antd/lib/form";

export default {
  unit: [
    {
      pattern: /^[a-zA-Z0-9_.-]*$/,
      message: "Invalid unit name",
    },
    { required: true, message: "Please input unit" },
  ],

  valueUnit: [
    {
      pattern: /^[+-]?([0-9]*[.])?[0-9]/,
      message: "Please enter only number",
    },
    {
      pattern: /[^0]+/,
      message: "0 is not allowed.",
    },
    { required: true, message: "Please input number" },
  ],

  system: [
    {
      pattern: /^[a-zA-Z0-9_.-]*$/,
      message: "Invalid system name",
    },
    { required: true, message: "Please input name of system" },
  ],
} as { [key: string]: Rule[] };
