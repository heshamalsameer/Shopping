import { z } from "zod";

// Create product Schema
export const createProductSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title should be of type string",
    })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),

  description: z.string().min(10),
  price:z.string({
    required_error:"price is required"
  }),

});

// Register Schema
export const registerSchema = z.object({
  username: z.string().min(2).max(100), //.optional(),
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});

// Login Schema
export const loginSchema = z.object({
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});

// Create Comment Schema
export const createCommentShema = z.object({
  text: z.string().min(2).max(500),
  articleId: z.number(),
});
// Create Cart Schema
export const createCartShema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title should be of type string",
    })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),

  description: z.string().min(10),
  price:z.number({
    required_error:"price is required"
  }),
  image:z.string({
    required_error:"image is required"
  }),
  
});

// Update User Profile Schema
export const updateUserSchema = z.object({
  username: z.string().min(2).max(100).optional(),
  email: z.string().min(3).max(200).email().optional(),
  password: z.string().min(6).optional(),
});
