import Form from "@/components/shared/Form";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    description: 'Vintage Jewellery, Vintage Jewels, Rings, Engagement Rings, Jewelry, Vintage Jewelry, Antique Jewellery',
}

export default function Hero() {
    return (
        <section className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Heading */}
            <div className="relative md:flex-center flex-col rounded-md overflow-hidden">
                <div className="relative self-start text-center md:text-left">
                    <h1>Unlock the Secrets of Vintage Elegance</h1>
                    <p className="mt-2">
                        Join Our Exclusive Community for Curated Jewellery Delivered to Your Phone
                    </p>
                </div>
                {/* Form */}
                <div className=" mt-4 w-full bg-contain">
                    <Form />
                </div>
                {/* <div className="absolute w-full h-full bg-neutral-600/100 opacity-10"></div> */}
            </div>

            {/* Image gallery */}
            <div className="">
                <div className=" columns-2 ">
                    <Image
                        className='mt-4 ml-4 h-fit w-fit bg-muted object-contain rounded-md'
                        src="/images/common/1.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                    <Image
                        className='mt-4 ml-4 h-fit w-fit bg-muted object-contain rounded-md'
                        src="/images/common/4.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                    <Image
                        className='mt-4 ml-4 h-fit w-fit bg-muted object-contain rounded-md'
                        src="/images/common/3.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                    <Image
                        className='mt-4 ml-4 h-fit w-fit bg-muted object-contain rounded-md'
                        src="/images/common/2.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                </div>
                <div className="mt-4 text-center">
                    Image Credit: <a className="capitalize hover:underline" href="https://omneque.com/" target="_blank">
                        Sue Tilley, Courtesy of Omneque
                    </a>
                </div>
            </div>
        </section>
    )
}
