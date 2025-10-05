import React from 'react'

export const Navbar = () => {
    const links = [
        { name: 'Guide', href: '/' },
        { name: 'Pricing', href: '/about' },
        { name: 'Login', href: '/contact' },
    ]
  return (
    <div className='navbar-root'>
        <div className='logo'>Finta</div>
        <div className='links'>
          {links.map(link => (
            <a className='links-items' key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
          <button className='btn-primary'>Get Started</button>
        </div>
    </div>
  )
}
