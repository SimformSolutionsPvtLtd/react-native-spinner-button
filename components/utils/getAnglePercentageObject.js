import { getPercentageFromAngle } from './index';

const getAnglePercentageObject = (angle) => {
  let realAngle = angle
  let angleObj = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }

  if (realAngle <= 45) {
    realAngle += 360
  }

  if (45 < realAngle && realAngle <= 135) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 45),
      x2: getPercentageFromAngle(realAngle, 45, true),
      y1: 100,
      y2: 0
    }
  } else if (135 < realAngle && realAngle <= 225) {
    angleObj = {
      x1: 100,
      x2: 0,
      y1: getPercentageFromAngle(realAngle, 135, true),
      y2: getPercentageFromAngle(realAngle, 135)
    }
  } else if (225 < realAngle && realAngle <= 315) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 225, true),
      x2: getPercentageFromAngle(realAngle, 225),
      y1: 0,
      y2: 100
    }
  } else if (315 < realAngle) {
    angleObj = {
      x1: 0,
      x2: 100,
      y1: getPercentageFromAngle(realAngle, 315),
      y2: getPercentageFromAngle(realAngle, 315, true)
    }
  }

  return angleObj
};

const getColorList = (gradientColoroffset, gradientColors) => {
  return [
    { offset: gradientColoroffset[0] || undefined, color: gradientColors[0] || undefined, opacity: '1' },
    { offset: gradientColoroffset[1] || undefined, color: gradientColors[1] || undefined, opacity: '1' },
    { offset: gradientColoroffset[2] || undefined, color: gradientColors[2] || undefined, opacity: '1' },
    { offset: gradientColoroffset[3] || undefined, color: gradientColors[3] || undefined, opacity: '1' },
  ];
};

export { getColorList, getAnglePercentageObject };
