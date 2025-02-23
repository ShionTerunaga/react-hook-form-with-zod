"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFormContext } from "./form-context";

export interface FormContextProps {
    children: ReactNode;
}

export function ReactHookFormProvider({ children }: FormContextProps) {
    const { zodSchema, mode } = useFormContext();

    const baseForm = useForm({ resolver: zodResolver(zodSchema), mode: mode });

    return <FormProvider {...baseForm}>{children}</FormProvider>;
}
