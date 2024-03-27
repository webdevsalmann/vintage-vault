import Form from "@/components/shared/Form";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="grid gap-8 md:grid-cols-2">
            {/* Heading */}
            <div className="md:flex-center flex-col">
                <div className="self-start text-center md:text-left">
                    <h1>Unveiling Vintage Vault</h1>

                    <p className="mt-2">
                        Vintage Jewellery with a Contemporary Curation
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="p-6 w-full bg-contain flex-center">
                <Form />
            </div>
        </section>
    )
}
