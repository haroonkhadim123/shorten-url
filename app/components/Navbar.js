import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <div className="navbar flex items-center justify-between px-4 py-3.5 text-white bg-purple-600 shadow">
            <h1 className='font-bold text-xl'>Bitlinks</h1>
            <ul className='flex items-center justify-center gap-4 '>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/shorten">Shorten</Link>
                <Link href="/">Contact</Link>
                <Link className='p-1.5 rounded-xl bg-purple-500 ' href="/shorten">Try Now</Link>
                <Link className='p-1.5 rounded-xl bg-purple-500' href="/shorten">GitHub</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar