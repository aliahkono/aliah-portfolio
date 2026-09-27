import { useEffect, useState } from 'react'

// Types each word, pauses, deletes it, then moves on to the next one.
// Shows the first word without animation for visitors who prefer reduced motion.
export function useTypewriter(words, { typeMs = 80, deleteMs = 40, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reduced) return
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs
    let next

    if (!deleting && text === word) {
      delay = holdMs
      next = () => setDeleting(true)
    } else if (deleting && text === '') {
      delay = 300
      next = () => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }
    } else {
      next = () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }

    const timer = setTimeout(next, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, reduced, typeMs, deleteMs, holdMs])

  return reduced ? words[0] : text
}
