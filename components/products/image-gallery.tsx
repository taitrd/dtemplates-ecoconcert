"use client"

import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square overflow-hidden rounded-lg ${
              index === selectedImage ? 'ring-2 ring-[#00B207]' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

