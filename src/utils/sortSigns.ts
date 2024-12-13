import { SortField, SortOrder, SortPayload } from '@/models/signsSort';
import { ZodiacSign } from '@/models/zodiacSign';
import { SortPayloadSchema } from '@/validators/sortPayload';
import { parseDbDate } from './dates';

const getConditionByField = (
  a: Date | string,
  b: Date | string,
  { field, order }: SortPayload
): boolean => {
  if (field === SortField.date) return order === SortOrder.asc ? a < b : b < a;

  return order === SortOrder.asc ? a > b : b > a;
};

export const sortSigns = (list: ZodiacSign[], payload: SortPayload) => {
  if (!list || list?.length === 0) throw Error('List is not defined');

  // Payload is valid
  SortPayloadSchema.parse(payload);

  const sortedList = [...list].sort((a, b) => {
    const isSortedByDate = payload.field === SortField.date;

    const aValue = isSortedByDate ? parseDbDate(a.init_date) : a.name;
    const bValue = isSortedByDate ? parseDbDate(b.init_date) : b.name;

    const condition = getConditionByField(aValue, bValue, payload);

    if (condition) {
      return -1;
    } else if (!condition) {
      return 1;
    }
    return 0;
  });

  return sortedList;
};
