"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const scheme = z.object({
    name: z.string().nonempty({ message: "Write name" }),
    email: z
        .string()
        .nonempty({ message: "Write email" })
        .email({ message: "The format is different." }),
});

export function Form() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: zodResolver(scheme), mode: "onChange" });

    const submit = (formData: { [x: string]: unknown }) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div style={{ marginBottom: 10 }}>
                <label htmlFor="name">name</label>
                <input type="text" {...register("name")} name="name" />
                <br />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="email">email</label>
                <input type="text" {...register("email")} name="email" />
                <br />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <button type="submit">submit</button>
        </form>
    );
}
