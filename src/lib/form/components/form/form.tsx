"use client";

import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

interface Props {
    submitProcessing: SubmitHandler<FieldValues>;
    children: ReactNode | ReactNode[];
}

export function FormComponent({ submitProcessing, children }: Props) {
    const { handleSubmit } = useFormContext();

    return <form onSubmit={handleSubmit(submitProcessing)}>{children}</form>;
}
