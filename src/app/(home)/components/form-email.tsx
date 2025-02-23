import { Input } from "./form-provider";
import { useCustomForm } from "@/lib/form";

export function FormEmail() {
    const {
        register,
        formState: { errors },
    } = useCustomForm<Input>();

    return (
        <>
            <label htmlFor="email">email</label>
            <input type="text" {...register("email")} name="email" />
            <br />
            {errors.email && <span>{errors.email.message}</span>}
        </>
    );
}
