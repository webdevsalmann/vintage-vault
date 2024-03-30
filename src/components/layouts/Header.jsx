"use client"
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className='absolute top-0 left-0 right-0 w-full'>
      <nav className="px-[5%] py-4 w-full grid grid-cols-2 justify-center items-center">

        <Link className="h-8 w-fit flex-center" href="/">
          <Image
            className='h-full w-fit'
            src="/images/logo/vintage-vault.png"
            width={400}
            height={100}
            alt='LOGO'
          />
        </Link>


        {/* <div className="w-8 h-8 md:hidden justify-self-end"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div> */}
{/* 
        <ul className={`link-box relative py-4 flex-center items-start flex-col gap-4 justify-self-start  md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} capitalize text-muted-foreground`} href="/#about">
            About
          </Link>
          <Link className={`${buttonVariants({ size: "sm" })} capitalize text-muted-foreground`} href="/">
            Receive Free Catalogue
          </Link>
        </ul> */}
      </nav>
    </header>
  )
}
