import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section border-t">
      <p className="text-muted-foreground text-sm text-center">
        &copy;Copyright Vintage Vault 2024 <br />
        The Community for Vintage Jewellery  <br />
        {/* <Link className="hover:underline" href="/credits">Credits</Link> <br /> */}
        <Link className="hover:underline" href="/terms-and-condition">Terms & Conditions</Link>

        {/* Copyright&copy;2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖 */}
      </p>
    </footer>
  )
}
