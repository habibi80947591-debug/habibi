import { useEffect, useState } from 'react'

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900)
    return () => clearTimeout(timer)
  }, [])
  if (!visible) return null
  return <div className="intro-screen" aria-hidden="true"><div className="intro-word">Trova<span>.</span></div></div>
}
