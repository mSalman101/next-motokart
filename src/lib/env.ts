import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string().min(1, "DATABASE_URL is required"),
  GOOGLE_CLIENT_ID: zod.string().min(1, "GOOGLE_CLIENT_ID is reqd"),
  GOOGLE_CLIENT_SECRET: zod.string().min(1, "GOOGLE_CLIENT_SECRET is reqd"),
  NEXTAUTH_URL: zod.string().min(1, "NEXTAUTH_URL is reqd"),
  NEXTAUTH_SECRET: zod.string().min(1, "NEXTAUTH_SECRET is reqd"),
});

export const env = envSchema.parse(process.env);

//GITHUB_ID: z.string().min(1, "GITHUB_ID is required"),
