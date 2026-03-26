'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Minus, Plus } from 'lucide-react'

interface Seat {
  id: string
  section: number
  row: number
  number: number
  status: 'available' | 'unavailable' | 'selected'
}

interface SeatingChartProps {
  onSeatSelect: (seats: Seat[]) => void
  selectedSeats: Seat[]
}

export function SeatingChart({ onSeatSelect, selectedSeats }: SeatingChartProps) {
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5))

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'unavailable') return
    
    const isSelected = selectedSeats.some(s => s.id === seat.id)
    if (isSelected) {
      onSeatSelect(selectedSeats.filter(s => s.id !== seat.id))
    } else {
      onSeatSelect([...selectedSeats, seat])
    }
  }

  return (
    <div className="w-full">
      <div className="relative w-full overflow-auto bg-black/20 rounded-xl p-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white text-black px-16 py-2 rounded-lg font-medium">
            Stage
          </div>
        </div>

        <div 
          style={{ transform: `scale(${zoom})` }}
          className="transition-transform duration-200 origin-center"
        >
          <svg 
            viewBox="0 0 1000 600" 
            className="w-full"
            style={{ minWidth: '800px' }}
          >
            {/* Section 1 (Center) */}
            <g transform="translate(400, 100)">
              {Array.from({ length: 10 }, (_, row) =>
                Array.from({ length: 12 }, (_, seat) => (
                  <rect
                    key={`1-${row}-${seat}`}
                    x={seat * 20 - (row * 10)}
                    y={row * 20}
                    width={16}
                    height={16}
                    rx={2}
                    className={`
                      cursor-pointer transition-colors
                      ${selectedSeats.some(s => s.id === `1-${row}-${seat}`)
                        ? 'fill-red-500'
                        : 'fill-[#4338ca] hover:fill-[#4338ca]/80'}
                    `}
                    onClick={() => handleSeatClick({
                      id: `1-${row}-${seat}`,
                      section: 1,
                      row,
                      number: seat + 1,
                      status: 'available'
                    })}
                  />
                ))
              )}
            </g>

            {/* Section 2 (Front) */}
            <g transform="translate(400, 350)">
              {Array.from({ length: 5 }, (_, row) =>
                Array.from({ length: 10 }, (_, seat) => (
                  <rect
                    key={`2-${row}-${seat}`}
                    x={seat * 20 - (row * 5)}
                    y={row * 20}
                    width={16}
                    height={16}
                    rx={2}
                    className="fill-[#4338ca] hover:fill-[#4338ca]/80 cursor-pointer transition-colors"
                    onClick={() => handleSeatClick({
                      id: `2-${row}-${seat}`,
                      section: 2,
                      row,
                      number: seat + 1,
                      status: 'available'
                    })}
                  />
                ))
              )}
            </g>

            {/* Section 3 (Left) */}
            <g transform="translate(200, 100)">
              {Array.from({ length: 10 }, (_, row) =>
                Array.from({ length: 8 }, (_, seat) => (
                  <rect
                    key={`3-${row}-${seat}`}
                    x={seat * 20 - (row * 10)}
                    y={row * 20}
                    width={16}
                    height={16}
                    rx={2}
                    className="fill-[#4338ca] hover:fill-[#4338ca]/80 cursor-pointer transition-colors"
                    onClick={() => handleSeatClick({
                      id: `3-${row}-${seat}`,
                      section: 3,
                      row,
                      number: seat + 1,
                      status: 'available'
                    })}
                  />
                ))
              )}
            </g>

            {/* Section 4 (Right) */}
            <g transform="translate(600, 100)">
              {Array.from({ length: 10 }, (_, row) =>
                Array.from({ length: 8 }, (_, seat) => (
                  <rect
                    key={`4-${row}-${seat}`}
                    x={seat * 20 - (row * 10)}
                    y={row * 20}
                    width={16}
                    height={16}
                    rx={2}
                    className="fill-[#4338ca] hover:fill-[#4338ca]/80 cursor-pointer transition-colors"
                    onClick={() => handleSeatClick({
                      id: `4-${row}-${seat}`,
                      section: 3,
                      row,
                      number: seat + 1,
                      status: 'available'
                    })}
                  />
                ))
              )}
            </g>

            {/* Section Labels */}
            <text x="450" y="280" className="fill-gray-400 text-sm" textAnchor="middle">
              Section 1
            </text>
            <text x="450" y="480" className="fill-gray-400 text-sm" textAnchor="middle">
              Section 2
            </text>
            <text x="250" y="280" className="fill-gray-400 text-sm" textAnchor="middle">
              Section 3
            </text>
            <text x="650" y="280" className="fill-gray-400 text-sm" textAnchor="middle">
              Section 4
            </text>
          </svg>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#4338ca] rounded" />
          <span className="text-sm text-gray-400">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded" />
          <span className="text-sm text-gray-400">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-500 rounded" />
          <span className="text-sm text-gray-400">Unavailable</span>
        </div>
      </div>
    </div>
  )
}

