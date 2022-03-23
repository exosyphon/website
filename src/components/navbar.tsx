import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className='flex flex-row items-center justify-between p-3'>
            <Link href='/'>
                <a className='inline-flex items-center m-2 '>
                    <span className='text-5xl'>AC</span>
                </a>
            </Link>
            <div className="mr-4 hidden space-x-8 sm:flex">
                <Link href='https://www.buymeacoffee.com/andrewcourter'>
                    <a className='text-2xl px-3 py-2 font-bold hover:italic hover:underline'>
                        Buy Me a Coffee
                    </a>
                </Link>
                <Link href='/about'>
                    <a className='text-2xl `px-3 py-2 font-bold hover:italic hover:underline'>
                        About
                    </a>
                </Link>
            </div>
            <div className="sm:hidden">
                <button onClick={handleClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                </button>
                {active && <div className="absolute top-20 right-0 z-10 flex flex-col space-y-4">
                    <Link href='https://www.buymeacoffee.com/andrewcourter'>
                        <a className='text-3xl hover:italic hover:underline shadow-xl rounded-l-xl py-3 px-4 bg-black text-white'>
                            Buy Me a Coffee
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className='text-3xl hover:italic hover:underline shadow-xl rounded-l-xl py-3 px-4 bg-black text-white'>
                            About
                        </a>
                    </Link>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar