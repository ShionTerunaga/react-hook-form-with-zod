import { FieldValues, SubmitHandler } from "react-hook-form";
import { FormFood } from "./form-food";
import { FormSports } from "./form-sports";
import { FormComponent, HasDisableSubmitButton } from "@/lib/form";

export function FormContents() {
    const submit: SubmitHandler<FieldValues> = (formData: FieldValues) => {
        alert(JSON.stringify(formData));
    };

    return (
        <FormComponent submitProcessing={submit}>
            <div style={{ marginBottom: 10 }}>
                <FormFood />
            </div>

            <div style={{ marginBottom: 10 }}>
                <FormSports />
            </div>

            <HasDisableSubmitButton>submit2</HasDisableSubmitButton>
        </FormComponent>
    );
}
