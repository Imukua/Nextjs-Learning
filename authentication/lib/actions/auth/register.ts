"use server"

import * as z from "zod";
import bcrypt from "bcrypt";
import { RegistrationSchema } from "../../schemas/FormSchemas";
import { db } from "../../db";
import { getUserByEmail } from "../data/user";

export const register = async (values: z.infer<typeof RegistrationSchema>) => {
    const validatedFileds = RegistrationSchema.safeParse(values);
    if (!validatedFileds.success) {
        return { error: "Invalid fields" };
    }
    const { email, password, name } = validatedFileds.data;
    const hashedPwd = await bcrypt.hash(password, 10);
    // Save the user to the database

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: "User already registered!" }
    };

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPwd,
        }
    });


    //Send user verification email
    return { success: "Registered successfully" };
}


