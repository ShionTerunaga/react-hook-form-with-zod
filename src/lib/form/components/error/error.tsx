import { FieldValues, Path } from "react-hook-form";
import { useCustomForm } from "../../hooks/form";

interface Props<T extends FieldValues> {
    method: Path<T>;
}

export function FormError<T extends FieldValues>({ method }: Props<T>) {
    const {
        formState: { errors },
    } = useCustomForm<T>();

    return (
        <>{errors[method] && <span>{String(errors[method].message)}</span>}</>
    );
}
