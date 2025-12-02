"use client"

import { useState, useEffect } from "react"
import type { Event } from "@/lib/types"
import { EventCard } from "./event-card"


interface FeaturedSliderProps {
  events: Event[]
}

export function FeaturedSlider({ events }: FeaturedSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, events.length])

  const goToPrevious = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const goToNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  return (
    <div className="relative" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
      <div className="relative h-[450px] overflow-hidden rounded-2xl">
        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="min-w-full h-full">
              <EventCard event={event} variant="featured" />
            </div>
          ))}
        </div>
      </div>



      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
