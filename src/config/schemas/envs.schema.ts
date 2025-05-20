import { z } from 'zod';

export const envsSchema = z.object({
  PORT: z.coerce.number().int().positive('PORT must be a positive integer').default(3000),
});
