"use client"

import { HeroSearch } from "@/components/hero-search"
import { FeaturedSlider } from "@/components/featured-slider"
import { CategorySection } from "@/components/category-section"
import { TrendingCities } from "@/components/trending-cities"
import { Newsletter } from "@/components/newsletter"
import { mockEvents, trendingCities, categories } from "@/lib/mock-data"

export default function Home() {
  const featuredEvents = mockEvents.filter((e) => e.featured)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-7xl mx-auto">
        <HeroSearch />
      </section>

      {/* MOOKALAA Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { label: "Events Booked", value: "150+" },
            { label: "Registered Artists", value: "250+" },
            { label: "Tickets Sold", value: "50,000+" },
            { label: "Active Learners", value: "2,000+" },
            { label: "Custom Orders", value: "3,000+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-lg p-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-500">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events Slider */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
          <p className="text-muted-foreground">Handpicked arts and cultural experiences</p>
        </div>
        <FeaturedSlider events={featuredEvents} />
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto space-y-12">
        {categories.slice(0, 3).map((category) => (
          <CategorySection key={category} category={category} events={mockEvents} />
        ))}
      </section>

      {/* Trending Cities */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <TrendingCities cities={trendingCities} />
      </section>

      {/* Newsletter */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <Newsletter />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Discover</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/events" className="hover:text-foreground transition">
                    Browse Events
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-foreground transition">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-foreground transition">
                    By Category
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Artists</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Register as Artist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Monetize Your Art
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact: info@mookalaa.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 MOOKALAA. Unite Through Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
