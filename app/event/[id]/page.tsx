"use client"

import { mockEvents } from "@/lib/mock-data"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Heart, Share2, Clock, CheckCircle } from "lucide-react"
import { formatDate, formatTime, addToCalendar, shareEvent, getRelatedEvents } from "@/lib/utils-events"
import Link from "next/link"
import { useState, use } from "react"

interface EventDetailProps {
  params: Promise<{ id: string }>
}

export default function EventDetailPage({ params }: EventDetailProps) {
  const { id } = use(params)
  const event = mockEvents.find((e) => e.id === id)
  const [isLiked, setIsLiked] = useState(false)

  if (!event) {
    return (
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <Button asChild>
            <Link href="/events">Back to Events</Link>
          </Button>
        </div>
      </main>
    )
  }

  const relatedEvents = getRelatedEvents(event, mockEvents)

  return (
    <main className="min-h-screen py-8">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Banner Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-muted">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title & Meta */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="rounded-md">{event.category}</Badge>
                {event.isFree && (
                  <Badge variant="secondary" className="rounded-md">
                    Free
                  </Badge>
                )}
                {event.isOnline && (
                  <Badge variant="outline" className="rounded-md">
                    Online
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{event.description}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold">{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold">{formatTime(event.time)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Attending</p>
                    <p className="font-semibold">{event.attendees.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => addToCalendar(event)} className="flex-1 rounded-lg">
                  Add to Calendar
                </Button>
                <Button variant="outline" onClick={() => setIsLiked(!isLiked)} className="rounded-lg">
                  <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                </Button>
                <Button variant="outline" onClick={() => shareEvent(event)} className="rounded-lg">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>

            {/* Organizer */}
            <Card className="p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">About the Organizer</h3>
              <div className="flex items-center gap-4">
                <img
                  src={event.organizer.image || "/placeholder.svg"}
                  alt={event.organizer.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{event.organizer.name}</h4>
                    {event.organizer.verified && <CheckCircle size={18} className="text-blue-500" />}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.organizer.events} events • {event.organizer.followers.toLocaleString()} followers
                  </p>
                </div>
              </div>
            </Card>

            {/* Location Map */}
            <Card className="p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map integration coming soon</p>
              </div>
            </Card>

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-4">Related Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedEvents.map((relatedEvent) => (
                    <EventCard key={relatedEvent.id} event={relatedEvent} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 rounded-lg sticky top-24">
              <h3 className="font-bold text-lg mb-4">Event Info</h3>

              {/* Price Info */}
              <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Entry Fee</p>
                <p className="text-3xl font-bold">{event.isFree ? "Free" : `₹${event.price}`}</p>
              </div>

              {/* Event Type Info */}
              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-1">EVENT TYPE</p>
                  <p className="font-semibold">{event.isOnline ? "Online Event" : "In-Person"}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-1">ATTENDEES</p>
                  <p className="font-semibold">{event.attendees.toLocaleString()} attending</p>
                </div>
              </div>

              {/* Interest Button */}
              <Button
                size="lg"
                className="w-full mb-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Mark as Interested
              </Button>

              {/* Share Button */}
              <Button variant="outline" size="lg" className="w-full rounded-lg bg-transparent">
                Share Event
              </Button>

              {/* Event Tags */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground mb-3">TAGS</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-md text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
