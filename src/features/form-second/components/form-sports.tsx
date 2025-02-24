import { Input } from "../layout/form-provider-second";
import { FormError, FormText } from "@/lib/form";

export function FormSports() {
    return (
        <>
            <label htmlFor="sports">favorite sports</label>
            <FormText method="sports" />
            <br />
            <FormError<Input> method="sports" />
        </>
    );
}
