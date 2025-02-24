import { Input } from "./form-provider";
import { FormError, FormText } from "@/lib/form";

export function FormEmail() {
    return (
        <>
            <label htmlFor="email">email</label>
            <FormText method="email" />
            <br />
            <FormError<Input> method="email" />
        </>
    );
}
