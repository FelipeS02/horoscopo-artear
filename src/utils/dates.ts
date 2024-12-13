import { isMatch, parse } from 'date-fns';

export const DATE_FORMAT = 'dd-MM';

export const parseDbDate = (date: string) =>
  parse(date, DATE_FORMAT, new Date());

export const dateFormatIsValid = (date: string) => isMatch(date, DATE_FORMAT);
