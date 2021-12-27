import React from "react";
import { ActivityIndicator, Platform } from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import { DEFAULT_COLOR_WHITE, getWaveFactorAndMode } from "../utils";
import { SpinnerComponentProp } from "./types";

const SpinnerComponent = ({
  height,
  size,
  spinnerColor,
  spinnerType,
  indicatorCount,
  spinnerOptions,
}: SpinnerComponentProp) => {
  const spinnerColors = spinnerColor || DEFAULT_COLOR_WHITE;

  switch (spinnerType?.trim()?.toLowerCase()) {
    case "barindicator":
      return (
        <BarIndicator
          color={spinnerColors}
          count={indicatorCount}
          size={height - 10}
        />
      );

    case "dotindicator":
      return (
        <DotIndicator
          color={spinnerColors}
          count={indicatorCount}
          size={size}
        />
      );

    case "materialindicator":
      // Note: To overcome https://github.com/n4kz/react-native-indicators/issues/11 and
      // https://github.com/n4kz/react-native-indicators/issues/6 ActivityIndicator is used in android
      if (Platform.OS === "android") {
        return <ActivityIndicator color={spinnerColors} size={height} />;
      }
      return <MaterialIndicator color={spinnerColors} size={height - 10} />;

    case "pacmanindicator":
      return <PacmanIndicator color={spinnerColors} size={height - 10} />;

    case "pulseindicator":
      return <PulseIndicator color={spinnerColors} size={height} />;

    case "skypeindicator":
      return (
        <SkypeIndicator
          color={spinnerColors}
          count={indicatorCount}
          size={height - 10}
        />
      );

    case "uiactivityindicator":
      return (
        <UIActivityIndicator
          color={spinnerColors}
          count={indicatorCount}
          size={height - 10}
        />
      );

    case "waveindicator":
      const { waveFactor, waveMode }: any =
        getWaveFactorAndMode(spinnerOptions);
      return (
        <WaveIndicator
          color={spinnerColors}
          count={indicatorCount}
          size={height - 10}
          waveFactor={waveFactor}
          waveMode={waveMode}
        />
      );

    default:
      return (
        <BallIndicator
          color={spinnerColors}
          count={indicatorCount}
          size={height - 20}
        />
      );
  }
};

export default SpinnerComponent;
