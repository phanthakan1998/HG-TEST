export interface IMassurement {
  [key: string]: IDetail[];
}

export interface IMockdata {
  [key: string]: { [key: string]: IDetail[] };
}

export interface IDetail {
  title: string;
  formula: number;
}

export interface IUnit {
  name: string;
  defaultUnit: string;
}
