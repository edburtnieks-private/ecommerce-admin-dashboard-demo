import { getValuePercentage } from './index';

describe('getValuePercentage', () => {
  it('should correctly calculate value percentage with default max and min values', () => {
    expect(getValuePercentage(100)).toEqual(100);
    expect(getValuePercentage(50)).toEqual(50);
    expect(getValuePercentage(17)).toEqual(17);
  });

  it('should correctly calculate value percentage with custom max value', () => {
    const base = 2762549;

    expect(getValuePercentage(2762549, base)).toEqual(100);
    expect(getValuePercentage(475622, base)).toEqual(17);
    expect(getValuePercentage(76, base)).toEqual(0);
  });
});
