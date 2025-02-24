import { FieldValues, Path } from "react-hook-form";
import { useCustomForm } from "../../hooks/form";

interface Props<T extends FieldValues> {
    method: Path<T>;
}

export function FormText<T extends FieldValues>({ method }: Props<T>) {
    const { register } = useCustomForm<T>();

    return <input type="text" {...register(method)} name={method} />;
}
