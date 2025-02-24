import { Input } from "../layout/form-provider-second";
import { FormError, FormText } from "@/lib/form";

export function FormFood() {
    return (
        <>
            <label htmlFor="food">favorite food</label>
            <FormText method="food" />
            <br />
            <FormError<Input> method="food" />
        </>
    );
}
