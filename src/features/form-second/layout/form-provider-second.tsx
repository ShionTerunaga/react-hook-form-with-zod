"use client";

import { z } from "zod";
import { FormProvider } from "@/lib/form";
import { FormContents } from "../components/form-contents";
export interface Input {
    food: string;
    sports: string;
}

const schema = z.object({
    food: z.string().optional(),
    sports: z.string(),
});

export function FormProcessingSecond() {
    return (
        <FormProvider zodSchema={schema}>
            <FormContents />
        </FormProvider>
    );
}
