import { dateFormatIsValid, parseDbDate } from '../dates';

describe('Dates helpers', () => {
  it('Parser throws when format is invalid', () => {
    expect(parseDbDate('23 06')).toThrow(TypeError);
  });

  it('Parser returns valid date object when format is valid', () => {
    expect(parseDbDate('20-06')).toBeTruthy();
  });

  it('Date format validator returns false if format is not valid', () => {
    expect(dateFormatIsValid('20 06')).toBeFalsy();
  });
});
