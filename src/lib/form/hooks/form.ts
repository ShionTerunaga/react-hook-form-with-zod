import { useEffect, useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

export function useCustomForm<T extends FieldValues>() {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const { register, formState, handleSubmit } = useFormContext<T>();

    useEffect(() => {
        console.log(formState.errors);
        setIsDisabled(Object.keys(formState.errors).length > 0);
    }, [formState]);

    return { register, formState, handleSubmit, isDisabled };
}
