const step: number = 100 / 90;

const getPercentageFromAngle = (
  angle: number,
  minVal: number,
  isRev = false
): number => {
  const actualDeg: number = angle - minVal;
  const percentage: number = step * actualDeg;
  return isRev ? 100 - percentage : percentage;
};

export default getPercentageFromAngle;
