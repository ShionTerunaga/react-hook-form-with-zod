import { FieldValues, useFormContext } from "react-hook-form";

export function useCustomForm<T extends FieldValues>() {
    const { register, formState, handleSubmit } = useFormContext<T>();

    return { register, formState, handleSubmit };
}
