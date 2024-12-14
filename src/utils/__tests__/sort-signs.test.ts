import { SortField, SortOrder, SortPayload } from '@/models/signsSort';
import { sortSigns } from '../sortSigns';
import { mockSigns } from '../tests';
import { ZodError } from 'zod';

describe('Sort signs', () => {
  it('Throws when list value is falsey', () => {
    const payload: SortPayload = {
      field: SortField.alphabetical,
      order: SortOrder.asc,
    };

    // @ts-expect-error Using invalid data to test
    expect(() => sortSigns(undefined, payload)).toThrow('List is not defined');
  });

  it('Throws when payload is invalid', () => {
    expect(() =>
      // @ts-expect-error Using invalid data to test
      sortSigns(mockSigns, { field: 'hola', order: 'prueba' })
    ).toThrow(ZodError);
  });

  it('Return sorted list', () => {
    const byAlphabetical = sortSigns(mockSigns, {
      field: SortField.alphabetical,
      order: SortOrder.desc,
    });

    const byDate = sortSigns(mockSigns, {
      field: SortField.date,
      order: SortOrder.desc,
    });

    expect(byAlphabetical[0]).toHaveProperty('name', 'Leo');

    expect(byDate[0]).toHaveProperty('name', 'Virgo');
  });
});
