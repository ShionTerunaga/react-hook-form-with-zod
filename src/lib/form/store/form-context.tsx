"use client";

import { createResult, Result, RESULT_NG } from "@/utils/result";
import { createContext, JSX, ReactNode, useContext, useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { ZodType } from "zod";
import { ReactHookFormProvider } from "./react-hook-form-provider";

export interface FormContextProps<T extends FieldValues> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zodSchema: ZodType<T, any, any>;
    mode?: "onChange" | "onSubmit" | "onBlur";
    children: ReactNode;
}

export type FormContextParams<T extends FieldValues> = Omit<
    FormContextProps<T>,
    "children"
>;

export const CreateFormContext = (function <T extends FieldValues>() {
    const Context = createContext<Result<FormContextParams<T>, Error>>(
        createResult.ng(new Error("初期化して"))
    );

    return Context;
})();

export function FormProvider<T extends FieldValues>({
    zodSchema,
    mode = "onSubmit",
    children,
}: FormContextProps<T>): JSX.Element {
    const result: Result<FormContextParams<T>, never> = useMemo(() => {
        return createResult.ok<FormContextParams<T>>({
            zodSchema: zodSchema,
            mode,
        });
    }, [zodSchema, mode]);

    return (
        <CreateFormContext value={result}>
            <ReactHookFormProvider>{children}</ReactHookFormProvider>
        </CreateFormContext>
    );
}

export function useFormContext() {
    const context = useContext(CreateFormContext);

    if (context.kind === RESULT_NG) {
        throw context.value;
    }

    const value = context.value;

    return value;
}
