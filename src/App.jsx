import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hikes from './pages/Hikes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hikes" element={<Hikes />} />
      </Routes>
    </BrowserRouter>
  )
}
