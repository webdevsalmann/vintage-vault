import Image from "next/image";

export default function About() {
    return (
        <>
            <section id="about">
                <h2>What We Do</h2>

                {/* About */}
                <div className="my-12 grid gap-8 md:grid-cols-2 text-lg">
                    <ul className="list-disc list-inside flex-center flex-col">
                        <li className="self-start">Vintage Vault curates vintage jewellery into exclusive look books shared over WhatsApp.</li>
                        <li className="self-start">Each piece is unique, handpicked and often unavailable on the open market.</li>
                        <li className="self-start">Curated by experts, our collection promises authenticity, a modern curation of vintage treasures and, for our clients, invitations to trunk shows in the World’s leading cities.</li>
                    </ul>
                    <div className="w-full flex-center">
                        <Image
                            className='h-full w-full'
                            src="/images/common/1.jpg"
                            width={500}
                            height={500}
                            alt='Jwellery Image'
                        />
                    </div>
                </div>

                {/* Gallery */}
                <div className="my-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <Image
                        className='h-full w-full object-contain blend'
                        src="/images/common/2.jpg"
                        width={500}
                        height={500}
                        alt='jwellery Image'
                    />
                    <Image
                        className='h-full w-full object-contain blend'
                        src="/images/common/3.jpg"
                        width={500}
                        height={500}
                        alt='jwellery Image'
                    />
                    <Image
                        className='h-full w-full object-contain blend'
                        src="/images/common/4.jpg"
                        width={500}
                        height={500}
                        alt='jwellery Image'
                    />
                </div>
            </section>
        </>
    )
}
