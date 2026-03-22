import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 h-14 flex-none border-b border-zinc-800/50">
      <Link href="/">
        <a className="font-bold text-lg tracking-tight text-zinc-100 hover:text-white transition-colors font-mono">
          AC
        </a>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/about">
          <a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            About
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
