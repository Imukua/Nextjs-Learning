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

export const SignUpSchems = z.object({

})