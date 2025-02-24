"use client";

import { z } from "zod";
import { FormProvider } from "@/lib/form";
import { FormContents } from "../components/form-contents";
export interface Input {
    name: string;
    email: string;
}

const schema = z.object({
    name: z.string().nonempty({ message: "Write name" }),
    email: z
        .string()
        .nonempty({ message: "Write email" })
        .email({ message: "The format is different." }),
});

export function FormProcessingFirst() {
    return (
        <FormProvider zodSchema={schema} mode="onChange">
            <FormContents />
        </FormProvider>
    );
}
