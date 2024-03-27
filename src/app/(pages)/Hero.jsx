import Form from "@/components/shared/Form";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    description: 'Vintage Jewellery, Vintage Jewels, Rings, Engagement Rings, Jewelry, Vintage Jewelry, Antique Jewellery',
}

export default function Hero() {
    return (
        <section className="grid gap-8 md:grid-cols-2">
            {/* Heading */}
            <div className="md:flex-center flex-col">
                <div className="self-start text-center md:text-left">
                    <h1>Unlock the Secrets of Vintage Elegance</h1>

                    <p className="mt-2">
                        Join Our Exclusive Community for Curated Jewellery Delivered to Your Phone
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
