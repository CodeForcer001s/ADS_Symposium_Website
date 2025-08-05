import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAP = (callback, dependencies = []) => {
  const ctx = useRef(gsap.context(() => {}))
  
  useEffect(() => {
    ctx.current.kill()
    ctx.current = gsap.context(callback)
    
    return () => ctx.current.kill()
  }, dependencies)
  
  return ctx
}