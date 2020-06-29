export const getValuePercentage = (
  value: number,
  base: number = 100,
  min: number = 0,
): number => {
  const range = base - min;
  const correctedStartValue = value - min;
  const percentage = (correctedStartValue * 100) / range;
  return Math.trunc(percentage);
};
