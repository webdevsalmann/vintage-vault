import Image from "next/image";

export default function SecondSection() {
    const imageClass = 'h-fit w-fit object-contain rounded-md'
    return (
        <section className="bg-muted">
            <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex-center">
                    <Image
                        className={imageClass}
                        src="/images/common/3.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                </div>
                <div className="flex-center">
                    <Image
                        className={imageClass}
                        src="/images/common/4.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                </div>
                <div className="flex-center">
                    <Image
                        className={imageClass}
                        src="/images/common/1.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                </div>
                <div className="flex-center">
                    <Image
                        className={imageClass}
                        src="/images/common/2.png"
                        width={500}
                        height={500}
                        alt='Jwellery Image'
                    />
                </div>
            </div>
            <div className="mt-4 text-center">
                Image Credit: <a className="capitalize hover:underline" href="https://omneque.com/" target="_blank">
                    Sue Tilley, Courtesy of Omneque
                </a>
            </div>
        </section>
    )
}
