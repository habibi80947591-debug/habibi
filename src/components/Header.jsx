import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="absolute inset-x-0 top-0 z-30 text-white">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <Link to="/" className="text-2xl font-semibold tracking-[-.06em]">Trova.</Link>
      <nav className="hidden items-center gap-8 md:flex">
        <a href="#about" className="text-sm">About</a><Link to="/hikes" className="text-sm">Our Hikes</Link><a href="#gallery" className="text-sm">Gallery</a><a href="#journal" className="text-sm">Journal</a>
      </nav>
      <div className="flex items-center gap-2">
        <Link to="/hikes" className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#162018] md:flex">Book Your Hike <ArrowUpRight size={16}/></Link>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md md:hidden">{open ? <X size={21}/> : <Menu size={21}/>}</button>
      </div>
    </div>
    {open && <div className="mx-4 rounded-3xl border border-white/15 bg-black/65 p-4 backdrop-blur-xl md:hidden"><nav className="grid gap-1"><a onClick={close} href="#about" className="rounded-2xl px-4 py-3">About</a><Link onClick={close} to="/hikes" className="rounded-2xl px-4 py-3">Our Hikes</Link><a onClick={close} href="#gallery" className="rounded-2xl px-4 py-3">Gallery</a><a onClick={close} href="#journal" className="rounded-2xl px-4 py-3">Journal</a><Link onClick={close} to="/hikes" className="mt-2 rounded-2xl bg-white px-4 py-3 text-center font-semibold text-[#162018]">Book Your Hike</Link></nav></div>}
  </header>
}
