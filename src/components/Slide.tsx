import { motion } from 'framer-motion'
import type { Slide as SlideType } from '../data/slides'

const textVariants = {
  enter: { opacity: 0, y: 20, scale: 0.98 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 }
}

export default function Slide({ slide }: { slide: SlideType }) {
  if (slide.kind === 'text') {
    return (
      <motion.div
        key={slide.id}
        initial="enter"
        animate="center"
        exit="exit"
        variants={textVariants}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center px-6 text-center h-full"
      >
        <div className="max-w-full sm:max-w-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800 break-words overflow-hidden">
            {slide.content}
          </h2>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.9 }}
      className="w-full h-full flex items-center justify-center p-4"
    >
      <img src={slide.src} alt={slide.alt || ''} className="slide-image max-w-full max-h-full object-contain" />
    </motion.div>
  )
}
