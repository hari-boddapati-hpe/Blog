"use client"

import { useState } from "react"
import { Search as SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Search() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 p-0"
      >
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <input
              type="search"
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search posts..."
              onChange={(e) => {
                // Implement search logic here
                console.log(e.target.value)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}