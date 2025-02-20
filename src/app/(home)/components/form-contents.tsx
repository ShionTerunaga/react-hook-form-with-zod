import { SubmitHandler } from "react-hook-form";
import { formContext, Input } from "./form-provider";
import { useCustomForm } from "@/hooks/form";
import { FormName } from "./form-name";
import { FormEmail } from "./form-email";

export function FormContents() {
    const { handleSubmit, isDisabled } = useCustomForm(formContext[1]);

    const submit: SubmitHandler<Input> = (formData: Input) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div style={{ marginBottom: 10 }}>
                <FormName />
            </div>

            <div style={{ marginBottom: 10 }}>
                <FormEmail />
            </div>

            <button type="submit" disabled={isDisabled}>
                submit
            </button>
        </form>
    );
}
