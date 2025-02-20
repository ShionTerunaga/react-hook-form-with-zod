"use client";

import { createFormContext } from "@/store/form-context";
import { z } from "zod";
import { FormContents } from "./form-contents";

export interface Input {
    name: string;
    email: string;
}

const scheme = z.object({
    name: z.string().nonempty({ message: "Write name" }),
    email: z
        .string()
        .nonempty({ message: "Write email" })
        .email({ message: "The format is different." }),
});

export const formContext = createFormContext<Input>();

export function FormProvider() {
    const [Provider] = formContext;

    return (
        <Provider zodScheme={scheme}>
            <FormContents />
        </Provider>
    );
}
