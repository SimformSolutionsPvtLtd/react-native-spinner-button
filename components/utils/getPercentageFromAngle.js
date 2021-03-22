const step = 100 / 90

const getPercentageFromAngle = (angle, minVal, isRev = false) => {
  const actualDeg = angle - minVal
  const percentage = step * actualDeg
  return (isRev) ? (100 - percentage) : percentage
}

export default getPercentageFromAngle
