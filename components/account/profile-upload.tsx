"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProfileUpload() {
  const [image, setImage] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32">
        <Image
          src={image || "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"}
          alt="Profile"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="outline"
          className="text-[#00B207] hover:bg-[#00B207]/10"
          onClick={() => document.getElementById("profile-upload")?.click()}
        >
          Choose Image
        </Button>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  )
}

