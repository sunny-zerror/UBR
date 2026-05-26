"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const GlobalHeadingReveal = () => {
  const pathname = usePathname()

  useGSAP(() => {

    let splits = []

    const init = async () => {

      await document.fonts.ready

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      const elements = gsap.utils.toArray("[data-heading-effect]")

      elements.forEach((el) => {

        if (el.dataset.splitInitialized) return

        el.dataset.splitInitialized = "true"

        const split = SplitText.create(el, {
          type: "lines",
          linesClass: "split-line",
        })

        splits.push(split)

        split.lines.forEach((line) => {

          const wrapper = document.createElement("div")

          wrapper.classList.add("line-wrapper")

          line.parentNode.insertBefore(wrapper, line)

          wrapper.appendChild(line)
        })

        gsap.set(split.lines, {
          yPercent: 110,
        })

        gsap.to(split.lines, {
          yPercent: 0,
          duration: 1,
          stagger: 0.08,
          ease: "expo.out",

          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      })

      ScrollTrigger.refresh()
    }

    init()

    return () => {

      splits.forEach((split) => {
        split.revert()
      })

      document
        .querySelectorAll("[data-split-initialized]")
        .forEach((el) => {
          delete el.dataset.splitInitialized
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

export default GlobalHeadingReveal