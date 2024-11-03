"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search as SearchIcon } from "lucide-react"

export function Search() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 px-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <SearchIcon className="h-4 w-4" />
      <span className="sr-only">Search</span>
    </Button>
  )
}