"use client"

import type { Event } from "@/lib/types"
import { EventCard } from "./event-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CategorySectionProps {
  category: string
  events: Event[]
}

export function CategorySection({ category, events }: CategorySectionProps) {
  const categoryEvents = events.filter((e) => e.category === category).slice(0, 6)

  if (categoryEvents.length === 0) return null

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">{category}</h2>
          <p className="text-muted-foreground">Discover {category.toLowerCase()} events happening now</p>
        </div>
        <Button asChild variant="outline" className="rounded-lg bg-transparent">
          <Link href={`/events?category=${category}`}>
            View All <ChevronRight size={18} />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
