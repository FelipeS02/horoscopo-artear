import { SortField, SortOrder } from '@/models/signsSort';
import { z } from 'zod';

export const SortFieldSchema = z.enum([SortField.date, SortField.alphabetical]);

export const SortOrderSchema = z.enum([SortOrder.asc, SortOrder.desc]);

export const SortPayloadSchema = z.object({
  field: SortFieldSchema,
  order: SortOrderSchema,
});
