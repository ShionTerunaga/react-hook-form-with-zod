import { FormProcessingFirst } from "@/features/form-first";
import { FormProcessingSecond } from "@/features/form-second/layout/form-provider-second";

export default function Home() {
    return (
        <div>
            <h1>form verify</h1>
            <h2>basic</h2>
            <FormProcessingFirst />
            <h2>option</h2>
            <FormProcessingSecond />
        </div>
    );
}
