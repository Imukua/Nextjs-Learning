import * as z from "zod";

export const LoginSchema = z.object(
    {
        email: z.string().email({
            message: "Email is required"
        }),
        password: z.string().min(1, {

            message: "email not valid"
        }),
    }
);
export const RegistrationSchema = z.object(
    {
        email: z.string().email({
            message: "Email is required"
        }),
        password: z.string().min(1, {

            message: "email not valid"
        }),
        name: z.string().min(1, {
            message: "name is required"
        }),
    }
);

