import type { ColorValue } from 'react-native';
import { getPercentageFromAngle } from '../utils';

export type CoOrdinateProp = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type GradientDataProp = {
  name: string;
  angle: number;
  colors: ColorValue[];
  offset: string[];
};

export type ColorListProp = {
  offset?: string;
  color?: ColorValue;
  opacity: string;
};

const getAnglePercentageObject = (angle: number): CoOrdinateProp => {
  let realAngle: number = angle;
  let angleObj: CoOrdinateProp = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  };

  if (realAngle <= 45) {
    realAngle += 360;
  }

  if (realAngle > 45 && realAngle <= 135) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 45),
      x2: getPercentageFromAngle(realAngle, 45, true),
      y1: 100,
      y2: 0,
    };
  } else if (realAngle > 135 && realAngle <= 225) {
    angleObj = {
      x1: 100,
      x2: 0,
      y1: getPercentageFromAngle(realAngle, 135, true),
      y2: getPercentageFromAngle(realAngle, 135),
    };
  } else if (realAngle > 225 && realAngle <= 315) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 225, true),
      x2: getPercentageFromAngle(realAngle, 225),
      y1: 0,
      y2: 100,
    };
  } else if (realAngle > 315) {
    angleObj = {
      x1: 0,
      x2: 100,
      y1: getPercentageFromAngle(realAngle, 315),
      y2: getPercentageFromAngle(realAngle, 315, true),
    };
  }

  return angleObj;
};

const getGradientFromName = (gradientName: string): GradientDataProp | null => {
  if (
    gradientName !== null &&
    gradientName !== undefined &&
    gradientName !== ''
  ) {
    const gradientJson: GradientDataProp[] = require('./GradientData.json');
    const gradientObject: GradientDataProp[] = gradientJson.filter(
      (item: { name: string }) =>
        item.name.trim().toLowerCase() === gradientName.trim().toLowerCase()
    );
    if (gradientObject.length > 0) {
      return gradientObject[0];
    }
  }
  return null;
};

const getColorList = (
  gradientColoroffset: string | any[],
  gradientColors: ColorValue[]
): ColorListProp[] => {
  const minLength: number = Math.min(
    gradientColoroffset.length,
    gradientColors.length
  );
  const colorList: ColorListProp[] = [];
  for (let i = 0; i < minLength; i++) {
    colorList.push({
      offset: gradientColoroffset[i] || undefined,
      color: gradientColors[i] || undefined,
      opacity: '1',
    });
  }
  return colorList;
};

export { getGradientFromName, getColorList, getAnglePercentageObject };
