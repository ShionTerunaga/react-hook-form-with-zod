import { FieldValues, SubmitHandler } from "react-hook-form";
import { FormName } from "./form-name";
import { FormEmail } from "./form-email";
import { FormComponent, HasDisableSubmitButton } from "@/lib/form";

export function FormContents() {
    const submit: SubmitHandler<FieldValues> = (formData: FieldValues) => {
        alert(JSON.stringify(formData));
    };

    return (
        <FormComponent submitProcessing={submit}>
            <div style={{ marginBottom: 10 }}>
                <FormName />
            </div>

            <div style={{ marginBottom: 10 }}>
                <FormEmail />
            </div>

            <HasDisableSubmitButton>submit1</HasDisableSubmitButton>
        </FormComponent>
    );
}
