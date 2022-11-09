import { IMockdata } from "../../interface/Massurement";
export const MockData: IMockdata = {
  Length: {
    SI: [
      {
        title: "meter",
        formula: 1,
      },
    ],

    Metric: [
      {
        title: "centimeter",
        formula: 100,
      },
      {
        title: "meter",
        formula: 1,
      },
      {
        title: "millimeter",
        formula: 1000,
      },

      {
        title: "kilometer",
        formula: 0.001,
      },
    ],

    English: [
      {
        title: "inch",
        formula: 39.3701,
      },
      {
        title: "feet",
        formula: 3.280839895,
      },

      {
        title: "yard",
        formula: 1.09361,
      },

      {
        title: "mile",
        formula: 0.00062137119223733,
      },
    ],

    Thai: [
      {
        title: "wa",
        formula: 0.5,
      },
    ],
  },

  Area: {
    SI: [
      {
        title: "sq. meter ",
        formula: 1,
      },
    ],
    Metric: [
      {
        title: "sq. cm.",
        formula: 10000,
      },
      {
        title: "sq. meter ",
        formula: 1,
      },
    ],

    Thai: [
      {
        title: "Rai",
        formula: 0.000625,
      },
      {
        title: "Ngan",
        formula: 0.0025,
      },
    ],

    English: [
      {
        title: "sq. yard",
        formula: 1.19599,
      },
      {
        title: "Acres",
        formula: 0.000247105381,
      },
    ],
  },
  Volume: {
    SI: [
      {
        title: "cubic meter",
        formula: 1,
      },
    ],
    Metric: [
      {
        title: "cubic centimeter",
        formula: 1000000,
      },

      {
        title: "liter ",
        formula: 1000,
      },
    ],
    Thai: [
      {
        title: "tank",
        formula: 50,
      },
    ],

    English: [
      {
        title: "cubic feet",
        formula: 35.3147,
      },
    ],
  },
  Speed: {
    SI: [
      {
        title: "m/s",
        formula: 1,
      },
    ],
    English: [
      {
        title: "miles/hr",
        formula: 2.23694,
      },
    ],

    Metric: [
      {
        title: "km/hr",
        formula: 3.6,
      },
    ],
  },
};
