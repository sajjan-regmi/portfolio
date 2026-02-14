"use client"

import { useEffect, useState } from "react"

export function ForestAnimations() {
  const [leaves, setLeaves] = useState<Array<{ id: number; delay: number; left: number }>>([])

  useEffect(() => {
    // Generate falling leaves
    const leafArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      left: Math.random() * 100,
    }))
    setLeaves(leafArray)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall text-amber-900 text-2xl opacity-90 drop-shadow-lg"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          🍃
        </div>
      ))}

      {/* Swaying Trees (decorative elements) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-100/20 to-transparent">
        <div className="absolute bottom-0 left-10 text-6xl text-emerald-700 animate-sway opacity-30">🌲</div>
        <div
          className="absolute bottom-0 right-20 text-5xl text-emerald-600 animate-sway opacity-25"
          style={{ animationDelay: "1s" }}
        >
          🌳
        </div>
        <div
          className="absolute bottom-0 left-1/3 text-7xl text-emerald-800 animate-sway opacity-20"
          style={{ animationDelay: "2s" }}
        >
          🌲
        </div>
      </div>
    </div>
  )
}
