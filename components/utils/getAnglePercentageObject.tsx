import getPercentageFromAngle from "./getPercentageFromAngle";

const getAnglePercentageObject = (angle: number) => {
  let realAngle = angle;
  let angleObj = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  };

  if (realAngle <= 45) {
    realAngle += 360;
  }

  if (45 < realAngle && realAngle <= 135) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 45),
      x2: getPercentageFromAngle(realAngle, 45, true),
      y1: 100,
      y2: 0,
    };
  } else if (135 < realAngle && realAngle <= 225) {
    angleObj = {
      x1: 100,
      x2: 0,
      y1: getPercentageFromAngle(realAngle, 135, true),
      y2: getPercentageFromAngle(realAngle, 135),
    };
  } else if (225 < realAngle && realAngle <= 315) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 225, true),
      x2: getPercentageFromAngle(realAngle, 225),
      y1: 0,
      y2: 100,
    };
  } else if (315 < realAngle) {
    angleObj = {
      x1: 0,
      x2: 100,
      y1: getPercentageFromAngle(realAngle, 315),
      y2: getPercentageFromAngle(realAngle, 315, true),
    };
  }

  return angleObj;
};

const getGradientFromName = (gradientName: string) => {
  if (
    gradientName !== null &&
    gradientName !== undefined &&
    gradientName !== ""
  ) {
    const gradientJson = require("./GradientData.json");
    const gradientObject = gradientJson.filter(
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
  gradientColorOffset: string | any[],
  gradientColors: string | any[]
) => {
  const minLength = Math.min(gradientColorOffset.length, gradientColors.length);
  const colorList = [];
  for (let i = 0; i < minLength; i++) {
    colorList.push({
      offset: gradientColorOffset[i] || undefined,
      color: gradientColors[i] || undefined,
      opacity: "1",
    });
  }
  return colorList;
};

export { getGradientFromName, getColorList, getAnglePercentageObject };
