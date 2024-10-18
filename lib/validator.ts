import {z} from "zod"

export const registerFormScheme = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long." })
      .max(50, { message: "Name cannot exceed 50 characters." }),
  
    email: z
      .string()
      .email({ message: "Invalid email address." }),
  
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(32, { message: "Password cannot exceed 32 characters." })

  });
  