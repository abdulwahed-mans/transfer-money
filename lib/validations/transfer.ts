import * as z from "zod";

export const transferSchema = z.object({
  sender: z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
  }),
  receiver: z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
  }),
  amount: z.number().positive(),
  sourceCurrency: z.string().length(3),
  targetCurrency: z.string().length(3),
});