export type AnimatableViewProps = {
  animationType: string;
  children?: JSX.Element;
  customSpinnerComponent: any;
  height: number;
  size: number;
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
  spinnerOptions: {};
  isLoading?: boolean;
  animatedDuration?: number;
};
