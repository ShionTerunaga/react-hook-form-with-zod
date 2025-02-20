import { useCustomForm } from "@/hooks/form";
import { formContext, Input } from "./form-provider";

export function FormName() {
    const { register, errors } = useCustomForm<Input>(formContext[1]);
    return (
        <>
            <label htmlFor="name">name</label>
            <input type="text" {...register("name")} name="name" />
            <br />
            {errors.name && <span>{errors.name.message}</span>}
        </>
    );
}
