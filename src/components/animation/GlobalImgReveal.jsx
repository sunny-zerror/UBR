"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const GlobalImgReveal = () => {
  const pathname = usePathname()

  useGSAP(() => {

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    const elements = gsap.utils.toArray("[data-img-effect]")

    elements.forEach((el) => {

      if (el.dataset.imgInitialized) return

      el.dataset.imgInitialized = "true"

      gsap.set(el, {
        opacity: 0,
        scale: 1.2,
        willChange: "transform, opacity",
      })

      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })

    ScrollTrigger.refresh()

    return () => {

      document
        .querySelectorAll("[data-img-effect]")
        .forEach((el) => {
          delete el.dataset.imgInitialized
        })

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

  }, [pathname])

  useEffect(() => {

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)

    return () => clearTimeout(timeout)

  }, [pathname])

  return null
}

export default GlobalImgReveal