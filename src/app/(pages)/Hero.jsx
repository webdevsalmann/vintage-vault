import Form from "@/components/shared/Form";
import { buttonVariants } from "@/components/ui/button";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    description: 'Vintage Jewellery, Vintage Jewels, Rings, Engagement Rings, Jewelry, Vintage Jewelry, Antique Jewellery',
}
const rubik = Crimson_Text({ subsets: ['latin'], weight: ["400", "600", "700",], });


export default function Hero() {
    return (
        <div className="grid gap-8 md:grid-cols-2 min-h-screen bg-grad-primary">
            {/* Heading */}
            <div className="p-4 md:p-8 relative md:flex-center flex-col rounded-md overflow-hidden">
                {/* Logo */}
                <Image
                    className='max-w-60 object-contain self-start'
                    src="/images/logo/vintage-vault.png"
                    width={400}
                    height={100}
                    alt='LOGO'
                />

                {/* What you do */}
                <div className="mt-8 relative self-start text-center md:text-left">
                    <h1 className={rubik.className}>Unveiling Vintage Vault: Vintage Jewellery with a Contemporary Curation</h1>
                    <p className="mt-2">
                        Curated vintage jewellery into exclusive look books shared over WhatsApp
                    </p>
                </div>

                {/* Our Story  */}
                <div className="mt-8 p-4 w-full bg-green-200 border rounded-md">
                    <div className="text-lg tracking-tight font-semibold">Our Story</div>
                    Vintage Vault curates vintage jewellery into exclusive look books shared over WhatsApp. <br /> <br />
                    Each piece is unique, handpicked and often unavailable on the open market. <br /> <br />

                    Curated by experts, our collection promises authenticity, a modern curation of vintage treasures and, for our clients, invitations to trunk shows in the Worlds leading cities.
                </div>
            </div>

            {/* Image gallery */}
            <div className="bg-yellow-300">
                {/* Form */}
                <div className="p-4 md:p-12 w-full bg-contain">
                    <h2 className="text-center">Join Our Community</h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}
