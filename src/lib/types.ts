import { student } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const StudentSchema = createInsertSchema(student,{
    id: z.number({
        required_error: "ID is required",
        invalid_type_error: "ID must be a number"
    }),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    age: z.number({
        required_error: "Age is required",
        invalid_type_error: "Age must be a number"
    }),
    dateOfBirth: z.string({
        required_error: "Date of birth is required",
        invalid_type_error: "Date of birth must be a string"
    }),
})