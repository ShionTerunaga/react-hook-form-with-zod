"use client";

import { ReactNode } from "react";
import { useCustomForm } from "../../hooks/form";

interface Props {
    children: ReactNode;
}

export function HasDisableSubmitButton({ children }: Props) {
    const { formState } = useCustomForm();
    return (
        <button
            type="submit"
            disabled={Object.keys(formState.errors).length > 0}
        >
            {children}
        </button>
    );
}
