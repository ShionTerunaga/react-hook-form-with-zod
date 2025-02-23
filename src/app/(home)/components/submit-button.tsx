"use client";

import { useCustomForm } from "@/lib/form";

export function SubmitButton() {
    const { isDisabled } = useCustomForm();

    return (
        <button type="submit" disabled={isDisabled}>
            submit
        </button>
    );
}
