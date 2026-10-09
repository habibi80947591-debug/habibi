import Header from '../components/Header'
import IntroAnimation from '../components/IntroAnimation'
import Hero from '../components/Hero'
import HeroBelow from '../components/HeroBelow'

export default function Home() {
  return (
    <main className="bg-[#f4f3ec] text-[#162018]">
      <IntroAnimation />
      <Header />
      <Hero />
      <HeroBelow />
    </main>
  )
}
