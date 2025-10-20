import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './components/Slide';
import BackgroundMusic from './components/BackgroundMusic';
import { slides as initialSlides } from './data/slides';
import { LoveCounter } from "./components/LoveCounter";

export default function App() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slides = initialSlides
  const changeInterval = 5000 // 5s

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, changeInterval)
    
    return () => clearInterval(id)
  }, [isPaused, slides.length])

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const goNext = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="h-[90vh] w-screen flex flex-col items-center justify-between pt-5">
      <header className="w-full flex flex-col md:flex-row items-center justify-between mb-4"></header>
      <h1 className="font-bold text-2xl pb-2">Júlia Lima</h1>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <LoveCounter startDate="2025-03-22T23:08:00" />
        <BackgroundMusic src={`${import.meta.env.BASE_URL}assets/GalCosta-PalavrasnoCorpo.mp3`} />
      </div>
      {/* Container */}
      <div className="max-w-md w-full h-[90vh] bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-4 m-4 flex flex-col">
        <div className="flex-1 relative rounded-2xl overflow-hidden bg-pink-50">
          <AnimatePresence mode="wait">
            <Slide key={slides[index].kind + slides[index].id} slide={slides[index]} />
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="px-3 py-2 rounded-full bg-white/90 shadow"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={() => setIsPaused((s) => !s)}
              className="px-3 py-2 rounded-full bg-white/90 shadow"
              aria-pressed={isPaused}
            >
              {isPaused ? '▶️' : '⏸'}
            </button>
            <button
              onClick={goNext}
              className="px-3 py-2 rounded-full bg-white/90 shadow"
              aria-label="Próximo"
            >
              ›
            </button>
          </div>
          <div className="text-sm text-gray-600">{index + 1} / {slides.length}</div>
        </div>
      </div>

      {/* Small footer note */}
      <div className="absolute bottom-4 text-xs text-gray-500">Feito com ❤️ pra você</div>
    </div>
  )
}