import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(/[!@#$%^&*(),.?":{}|<>]/),
  username: z.string(),
  role: z.enum(["student", "teacher", "school"]),
});
