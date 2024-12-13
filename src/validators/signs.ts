import { dateFormatIsValid } from '@/utils/dates';
import { z } from 'zod';

export const signsSchema = z.object({
  id: z.number(),
  name: z.string(),
  init_date: z.string().refine(dateFormatIsValid),
  end_date: z.string().refine(dateFormatIsValid),
  prediction: z.string(),
  image: z.string(),
});

export const signsListSchema = z.array(signsSchema);
