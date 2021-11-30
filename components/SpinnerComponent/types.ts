export type SpinnerComponentProp = {
  height: number;
  spinnerColor: string;
  spinnerType:
    | "barindicator"
    | "dotindicator"
    | "materialindicator"
    | "pacmanindicator"
    | "pulseindicator"
    | "skypeindicator"
    | "uiactivityindicator"
    | "waveindicator";
  indicatorCount: number;
  size: number;
  spinnerOptions: {};
};
