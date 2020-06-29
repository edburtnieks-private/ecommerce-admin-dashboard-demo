export const abbreviateNumber = (value: number): string => {
  const shortNumber = new Intl.NumberFormat('en', {
    // @ts-ignore
    notation: 'compact',
  }).format(value);

  return shortNumber;
};
