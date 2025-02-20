"use client";

import { createResult, Result, RESULT_NG } from "@/utils/result";
import { createContext, JSX, ReactNode, useContext, useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { ZodType } from "zod";

interface Props<T extends FieldValues> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zodScheme: ZodType<T, any, any>;
    children: ReactNode;
}

export const createFormContext = function <T extends FieldValues>(): [
    (props: Props<T>) => JSX.Element,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => ZodType<T, any, any>
] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Context = createContext<Result<ZodType<T, any, any>, Error>>(
        createResult.ng(new Error("初期化して"))
    );

    function FormProvider({ zodScheme, children }: Props<T>): JSX.Element {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: Result<ZodType<T, any, any>, Error> = useMemo(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return createResult.ok<ZodType<T, any, any>>(zodScheme);
        }, [zodScheme]);

        return <Context value={result}>{children}</Context>;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function useFormContext(): ZodType<T, any, any> {
        const context = useContext(Context);

        if (context.kind === RESULT_NG) {
            throw context.value;
        }

        const value = context.value;

        return value;
    }

    return [FormProvider, useFormContext];
};
