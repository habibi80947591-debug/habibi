import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroData } from '../data/heroData'

export default function Hero() {
  return <section className="relative isolate min-h-screen overflow-hidden bg-[#162018] text-white">
    <img src={heroData.image} alt="Mountain landscape" className="absolute inset-0 h-full w-full object-cover object-center"/>
    <div className="absolute inset-0 bg-black/15"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20"/>
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
      <div className="hero-content max-w-6xl">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.28em] text-white/85 sm:text-xs">{heroData.eyebrow}</p>
        <h1 className="max-w-5xl text-[clamp(4rem,10.4vw,10rem)] font-medium leading-[.78] tracking-[-.08em]">{heroData.title}</h1>
        <div className="mt-8 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-10">
          <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg lg:text-xl lg:leading-8">{heroData.description}</p>
          <Link to="/hikes" className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#162018] transition hover:-translate-y-0.5">{heroData.cta}<span className="grid h-7 w-7 place-items-center rounded-full bg-[#162018] text-white"><ArrowRight size={15}/></span></Link>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/70"><span className="h-px w-10 bg-white/50"/>Mountain · Coastal · Forest</div>
    </div>
  </section>
}
