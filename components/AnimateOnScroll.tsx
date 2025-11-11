'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn'
  delay?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClass = {
    fadeInUp: 'fade-in-on-scroll',
    fadeInLeft: 'fade-in-left-on-scroll',
    fadeInRight: 'fade-in-right-on-scroll',
    scaleIn: 'scale-in-on-scroll',
  }[animation]

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

