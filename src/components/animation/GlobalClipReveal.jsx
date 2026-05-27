"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const GlobalClipReveal = () => {
  const pathname = usePathname()

  useGSAP(() => {

    const ctx = gsap.context(() => {

      const elements = gsap.utils.toArray("[data-clip-effect]")

      elements.forEach((el) => {

        if (el.dataset.imgInitialized) return

        el.dataset.imgInitialized = "true"

        gsap.set(el, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          scale: 1.2,
          willChange: "transform, opacity",
        })

        gsap.to(el, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 2,  
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        })
      })

    })

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)

    return () => {
      clearTimeout(timeout)

      document
        .querySelectorAll("[data-clip-effect]")
        .forEach((el) => {
          delete el.dataset.imgInitialized
        })

      ctx.revert()
    }

  }, [pathname])

  return null
}

export default GlobalClipReveal