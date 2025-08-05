import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const useSpaceAnimation = (selector, options = {}) => {
  const element = useRef(null)
  
  useEffect(() => {
    if (!element.current) return
    
    const {
      duration = 2,
      delay = 0,
      ease = 'power2.out',
      x = 0,
      y = 0,
      rotation = 0,
      scale = 1,
      opacity = 1,
      stagger = 0,
      scrollTrigger = null,
    } = options
    
    const targets = selector 
      ? element.current.querySelectorAll(selector) 
      : element.current
    
    const tl = gsap.timeline({
      scrollTrigger: scrollTrigger,
    })
    
    tl.to(targets, {
      duration,
      delay,
      ease,
      x,
      y,
      rotation,
      scale,
      opacity,
      stagger,
    })
    
    return () => {
      tl.kill()
    }
  }, [selector, options])
  
  return element
}