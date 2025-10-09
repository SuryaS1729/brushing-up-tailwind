import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  const links = [
    {
      href: "/guide",
      label: "Guide"
    },
    {
      href: "/pricing",
      label: "Pricing"  
    },
    {
      href: "/login",
      label: "Login"
    }
  ]
  return (
    <div className='flex items-center justify-between py-3.5 pl-2 sm:px-4 sm:py-3 md:px-0'>
      <Link href="/">
      <Image 
            draggable={false}
            loading='lazy'
            src = "/logo.svg" 
            height={100} 
            width={100} 
            alt="Logo" />
      </Link>
      <div className='flex items-center gap-8'>
      {links.map((link,index) => (
        <Link key={link.href} href={link.href} className='text-neutral-800 hover:text-neutral-500 transition duration-200 px-3 py-2 rounded-md text-sm font-medium'>{link.label}</Link>
      ))}
      <button className='bg-[#2579F3] text-white font-bold px-4 py-2 rounded-lg shadow-lg text-shadow-md'>Start Free trial</button>
      </div>
    </div>
  )
}
