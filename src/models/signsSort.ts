export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum SortField {
  date = 'end_date',
  alphabetical = 'name',
}

export type SortPayload = {
  field: SortField;
  order: SortOrder;
};
