import { Input } from "../layout/form-provider-first";
import { FormError, FormText } from "@/lib/form";

export function FormName() {
    return (
        <>
            <label htmlFor="name">name</label>
            <FormText method="name" />
            <br />
            <FormError<Input> method="name" />
        </>
    );
}
