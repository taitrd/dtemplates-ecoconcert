"use client"

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')

      const position = { lat: 43.5460, lng: -96.7313 } // San Jose, South Dakota coordinates
      
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: 'DEMO_MAP_ID',
        disableDefaultUI: true,
        zoomControl: true,
      }

      const map = new Map(mapRef.current as HTMLElement, mapOptions)

      new google.maps.Marker({
        position,
        map,
        title: 'Our Location',
      })
    }

    initMap()
  }, [])

  return (
    <div className="rounded-lg border overflow-hidden">
      <div ref={mapRef} className="h-[400px] w-full" />
    </div>
  )
}

