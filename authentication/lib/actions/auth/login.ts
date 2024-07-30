"use server"
import { LoginSchema } from "@/lib/schemas/FormSchemas"
import { error } from "console"
import * as z from "zod"


export const login = (values: z.infer<typeof LoginSchema>) => {
    const ValidatedValues = LoginSchema.safeParse(values)
    if (!ValidatedValues.success) {
        return { error: "Invalid values!" }
    }
    return { success: "Logged in!" }
}
