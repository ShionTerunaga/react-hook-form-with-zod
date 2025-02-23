import { Input } from "./form-provider";
import { useCustomForm } from "@/lib/form";

export function FormName() {
    const { register, formState } = useCustomForm<Input>();
    return (
        <>
            <label htmlFor="name">name</label>
            <input type="text" {...register("name")} name="name" />
            <br />
            {formState.errors.name && (
                <span>{formState.errors.name.message}</span>
            )}
        </>
    );
}
