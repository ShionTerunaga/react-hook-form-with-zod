import { useCustomForm } from "@/hooks/form";
import { formContext } from "./form-provider";

export function FormEmail() {
    const { register, errors } = useCustomForm(formContext[1]);

    return (
        <>
            <label htmlFor="email">email</label>
            <input type="text" {...register("email")} name="email" />
            <br />
            {errors.email && <span>{errors.email.message}</span>}
        </>
    );
}
