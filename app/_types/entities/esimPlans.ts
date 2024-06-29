import { z } from "zod";

export const esimPlansSchema = z.object({
  id: z.number(),
  type: z.string(),
  plan: z.string(),
  data_unit: z.string(),
  data_amount: z.number(),
  price_in_usd: z.string(),
  duration_in_days: z.number(),
  country_code: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  name: z.string(),
});

export type esimPlansEntity = z.infer<typeof esimPlansSchema>;
