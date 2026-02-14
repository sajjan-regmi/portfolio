"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface LightboxProps {
  isOpen: boolean
  image: {
    id: number
    title: string
    description: string
    thumb: string
    full: string
  } | null
  onClose: () => void
}

export function GalleryLightbox({ isOpen, image, onClose }: LightboxProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen || !image) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 text-white hover:bg-white/10 rounded-full p-2 transition-colors duration-200 md:top-4 md:-right-12"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        {/* Image Container */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          {/* Thumbnail placeholder */}
          <img
            src={image.thumb}
            alt={image.title}
            className={`w-full h-full object-contain blur-xl transition-opacity duration-300 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Full quality image */}
          <img
            src={image.full}
            alt={image.title}
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Image Info */}
        <div className="mt-4 text-white">
          <h2 className="text-2xl font-bold text-balance">{image.title}</h2>
          <p className="text-white/70 mt-2 text-balance">{image.description}</p>
        </div>
      </div>
    </div>
  )
}
