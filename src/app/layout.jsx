import { Barlow_Condensed, Crimson_Text, Kanit, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';

const rubik = Crimson_Text({ subsets: ['latin'], weight: [ "400",  "600", "700", ], });
// const myFont = localFont({ src: '../../public/fonts/ARBONNIE.ttf' })
// const rubik = Crimson_Text({ subsets: ['latin'] });

export const metadata = {
  title: 'Vintage Vault – Vintage Jewellery',
  description: 'A Vintage Jewellery Community for curated vintage jewellery and invitations to private jewellery sales and jewelry trunk shows.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html >
  )
}
