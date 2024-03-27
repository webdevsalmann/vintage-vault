"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { AtSign, CircleUser, Loader2, Smartphone } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export default function Form() {
    // const { toast } = useToast()
    // const [btnDisable, setBtnDisable] = useState(false);
    // const [loading, setLoading] = useState(false);
    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     setLoading(true);
    //     setBtnDisable(true);
    //     const formData = new FormData(event.target);
    //     formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);
    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: json
    //     });
    //     const result = await response.json();
    //     setLoading(false);

    //     if (!result.success || !response) {
    //         toast({
    //             variant: "destructive",
    //             title: "Something went wrong while submitting the form.",
    //         });
    //     } else if (result.success) {
    //         toast({
    //             title: "Thank You for Reaching Out!",
    //             description: "Your message has been successfully sent. I will get back to you as soon as possible",
    //         });

    //         setTimeout(() => {
    //             setBtnDisable(false)
    //         }, 60000);
    //     }
    // }

    return (
        <form className="p-4 w-full flex flex-col gap-6 bg-muted rounded-md border">
            <div className="text-center">
                <div className="text-4xl font-medium">Get Free Catelogue</div>
                <p className="mt-2">Receive latest catelogue form vintage vault every month.</p>
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label className="text-lg flex gap-2" htmlFor="firstName">
                    <CircleUser className="size-4 self-center" /> First Name
                </Label>
                <Input className="w-full" type="text" name="firstName" id="firstName" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label className="text-lg flex gap-2" htmlFor="lastName">
                    <CircleUser className="size-4 self-center" /> Last Name
                </Label>
                <Input className="w-full" type="text" name="lastName" id="lastName" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label className="text-lg flex gap-2" htmlFor="email">
                    <AtSign className="size-4 self-center" /> Email
                </Label>
                <Input className="w-full" type="email" name="email" id="email" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label className="text-lg flex gap-2" htmlFor="mobileNumber">
                    <Smartphone className="size-4 self-center" /> Mobile No.
                </Label>
                <Input className="w-full" type="tel" name="mobileNumber" id="mobileNumber" required />
            </div>

            <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>

            {/* <Button className="w-fit mx-auto" variant="secondary" disabled={btnDisable}>{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Send{loading && "ing"} </Button> */}
            <Button className="w-full mx-auto capitalize">Join for Free</Button>
        </form>
    )
}
