import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ZodType } from "zod";

export function useCustomForm<T extends FieldValues>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useFormContext: () => ZodType<T, any, any>
) {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const scheme = useFormContext();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: zodResolver(scheme), mode: "onChange" });

    useEffect(() => {
        setIsDisabled(Object.keys(errors).length > 0);
    }, [errors]);

    return { register, errors, handleSubmit, isDisabled };
}
