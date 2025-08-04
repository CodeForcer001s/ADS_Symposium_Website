import { useEffect, useRef } from 'react'

export const useParallax = (speed = 0.1) => {
  const ref = useRef(null)
  
  useEffect(() => {
    if (!ref.current) return
    
    const element = ref.current
    let startPositionY = 0
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const translateY = scrollPosition * speed
      element.style.transform = `translateY(${translateY}px)`
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])
  
  return ref
}