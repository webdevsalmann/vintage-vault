import { Barlow_Condensed } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';

const rubik = Barlow_Condensed({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
// const rubik = Barlow_Condensed({ subsets: ['latin'] });

export const metadata = {
  title: 'webdevsalmann',
  description: 'Website Developer Salman portfolio',
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
