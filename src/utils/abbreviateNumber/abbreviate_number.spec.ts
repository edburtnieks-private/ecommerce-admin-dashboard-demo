import { abbreviateNumber } from './index';

describe('abbreviateNumber', () => {
  it('should correctly abbreviate number', () => {
    expect(abbreviateNumber(2762549)).toEqual('2.8M');
    expect(abbreviateNumber(475622)).toEqual('476K');
    expect(abbreviateNumber(76)).toEqual('76');
  });
});
