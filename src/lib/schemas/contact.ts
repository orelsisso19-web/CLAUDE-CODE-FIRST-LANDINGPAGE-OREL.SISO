import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Please enter a valid email"),
  business: z.string().min(1, "Business name is required"),
  message: z.string().min(10, "Tell me a bit more (at least 10 characters)"),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
