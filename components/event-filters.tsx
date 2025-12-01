"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/mock-data"
import type { FilterOptions } from "@/lib/types"

interface EventFiltersProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
  onClear: () => void
}

export function EventFilters({ filters, onFiltersChange, onClear }: EventFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className="md:hidden w-full mb-4 rounded-lg">
        Filters
      </Button>

      {/* Filter Panel */}
      <Card className={`p-6 rounded-lg ${isOpen ? "block" : "hidden md:block"}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Filters</h3>
          <Button variant="ghost" size="sm" onClick={onClear} className="text-xs">
            Clear All
          </Button>
        </div>

        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Category</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={filters.category === cat ? "default" : "outline"}
                  onClick={() => updateFilter("category", filters.category === cat ? "" : cat)}
                  className="cursor-pointer rounded-md"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <label className="font-semibold text-sm mb-3 block">Location</label>
            <input
              type="text"
              placeholder="City or ZIP"
              value={filters.location}
              onChange={(e) => updateFilter("location", e.target.value)}
              className="w-full px-3 py-2 bg-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-sm"
            />
          </div>

          {/* Price Range */}
          <div>
            <label className="font-semibold text-sm mb-3 block">Price Range</label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    updateFilter("priceRange", [Number.parseInt(e.target.value) || 0, filters.priceRange[1]])
                  }
                  className="flex-1 px-3 py-2 bg-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    updateFilter("priceRange", [filters.priceRange[0], Number.parseInt(e.target.value) || 1000])
                  }
                  className="flex-1 px-3 py-2 bg-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-sm"
                />
              </div>
              <div className="text-xs text-muted-foreground">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </div>
            </div>
          </div>

          {/* Event Type */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Event Type</h4>
            <div className="space-y-2">
              {[
                { value: "all", label: "All Types" },
                { value: "free", label: "Free Events" },
                { value: "paid", label: "Paid Events" },
                { value: "online", label: "Online" },
                { value: "offline", label: "In-Person" },
              ].map((type) => (
                <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={type.value}
                    checked={filters.type === type.value}
                    onChange={(e) => updateFilter("type", e.target.value as any)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{type.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}
