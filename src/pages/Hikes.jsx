import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Check, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hikes } from '../data/hikes'

const filters = ['All', 'Easy', 'Moderate', 'Tough']

export default function Hikes() {
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedHike, setSelectedHike] = useState(null)

  const filtered = useMemo(() => filter === 'All' ? hikes : hikes.filter((hike) => hike.level === filter), [filter])

  return (
    <main className="min-h-screen bg-[#f4f3ec] text-[#162018]">
      <header className="sticky top-0 z-30 border-b border-[#162018]/10 bg-[#f4f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link to="/" className="text-2xl font-semibold tracking-[-0.06em]">Trova.</Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm">About</Link>
            <Link to="/hikes" className="text-sm font-semibold">Our Hikes</Link>
            <a href="/#gallery" className="text-sm">Gallery</a>
            <a href="/#journal" className="text-sm">Journal</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-full bg-[#162018] px-5 py-3 text-sm font-semibold text-white md:block">Book Your Hike ↗</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#162018]/15 md:hidden">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && <div className="mx-4 mb-4 grid gap-1 rounded-3xl border border-[#162018]/10 bg-white p-3 shadow-xl md:hidden">
          <Link onClick={() => setMenuOpen(false)} to="/" className="rounded-2xl px-4 py-3">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/hikes" className="rounded-2xl bg-[#162018] px-4 py-3 text-white">Our Hikes</Link>
        </div>}
      </header>

      <section className="px-5 pb-14 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/" className="mb-12 inline-flex items-center gap-2 text-sm font-medium"><ArrowLeft size={16}/> Back home</Link>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#162018]/50">Our hikes</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(4rem,10vw,9rem)] font-medium leading-[.82] tracking-[-.075em]">Find Your<br/>Next Trail</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#162018]/65">From peaceful forest walks to challenging mountain summits, discover adventures made for every kind of explorer.</p>

          <div className="mt-12 flex flex-wrap gap-2">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-5 py-3 text-sm transition ${filter === item ? 'border-[#162018] bg-[#162018] text-white' : 'border-[#162018]/15 bg-white hover:border-[#162018]/40'}`}>{item}</button>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2">
          {filtered.map((hike) => <article key={hike.name} className="group overflow-hidden rounded-[2rem] border border-[#162018]/10 bg-white">
            <div className="relative aspect-[1.18] overflow-hidden">
              <img src={hike.image} alt={hike.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold backdrop-blur">{hike.level}</span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[.16em] text-[#162018]/50"><span>{hike.days} Days</span><span>{hike.price}</span></div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-.045em] sm:text-4xl">{hike.name}</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#162018]/65">{hike.description}</p>
              <button onClick={() => setSelectedHike(hike)} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#162018] px-5 py-3 text-sm font-semibold text-white">Learn more <ArrowUpRight size={16}/></button>
            </div>
          </article>)}
        </div>
      </section>

      <footer className="border-t border-[#162018]/10 bg-[#162018] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div><div className="text-4xl font-semibold tracking-[-.06em]">Trova.</div><p className="mt-4 max-w-sm text-white/60">Guided hikes, breathtaking trails, and unforgettable moments—all thoughtfully crafted in one place.</p></div>
          <Link to="/" className="text-sm text-white/70 hover:text-white">Back to home ↗</Link>
        </div>
      </footer>

      {selectedHike && <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-5 backdrop-blur-sm" onClick={() => setSelectedHike(null)}>
        <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-[2rem] bg-[#f4f3ec] p-6 sm:p-9" onClick={(e) => e.stopPropagation()}>
          <div className="relative overflow-hidden rounded-[1.5rem]"><img src={selectedHike.image} alt={selectedHike.name} className="aspect-[1.5] w-full object-cover"/><button onClick={() => setSelectedHike(null)} className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm">Close</button></div>
          <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#162018]/50"><span>{selectedHike.level}</span><span>·</span><span>{selectedHike.days} Days</span><span>·</span><span>{selectedHike.price}</span></div>
          <h2 className="mt-3 text-4xl font-medium tracking-[-.05em]">{selectedHike.name}</h2>
          <p className="mt-4 leading-7 text-[#162018]/65">{selectedHike.description}</p>
          <h3 className="mt-8 text-xl font-semibold">What’s included</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">{open.includes.map((item) => <li key={item} className="flex gap-2 text-sm text-[#162018]/75"><Check size={18} className="mt-0.5 shrink-0"/>{item}</li>)}</ul>
          <button className="mt-8 rounded-full bg-[#162018] px-6 py-3 text-sm font-semibold text-white">Reserve your spot</button>
        </div>
      </div>}
    </main>
  )
}
