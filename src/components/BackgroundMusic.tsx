import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
  
    // Try to resume audio on gesture (mobile browsers require interaction)
    const resume = () => {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
      window.removeEventListener('touchstart', resume)
      window.removeEventListener('click', resume)
    }

    window.addEventListener('touchstart', resume)
    window.addEventListener('click', resume)
    
    return () => {
      window.removeEventListener('touchstart', resume)
      window.removeEventListener('click', resume)
    }
  }, [])

  return (
    <div className="absolute top-4 right-4 z-50">
      <audio ref={audioRef} src={src} loop />
      <button
        onClick={() => {
          const audio = audioRef.current
          if (!audio) return
          if (playing) {
            audio.pause()
            setPlaying(false)
          } else {
            audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
          }
        }}
        className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md text-sm"
        aria-pressed={playing}
      >
        {playing ? '🔊 Música' : '🔈 Tocar'}
      </button>
    </div>
  )
}