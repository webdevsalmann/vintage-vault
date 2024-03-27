import Form from "@/components/shared/Form";

export default function CTA() {
    return (
        <section className="grid gap-8 md:grid-cols-2">
            {/* Form */}
            <div className="w-full bg-contain flex-center">
                <Form />
            </div>

            {/* CTA */}
            <div className="p-4 w-full h-fit bg-muted rounded">
                <h2>Ready to take the next step?</h2>
                <p className="mt-2">
                    We don't have a shop and you won't find us on social media. Register for a journey through fashion history, discovering hidden gems and lesser-known treasures, all carefully sourced and conveniently delivered via WhatsApp.
                </p>
            </div>
        </section>
    )
}
