"use client"

import { useEffect, useState } from "react"

const galleryFiles = [
  "1.png",
  "image copy 10.png",
  "image copy 11.png",
  "image copy 12.png",
  "image copy 13.png",
  "image copy 14.png",
  "image copy 15.png",
  "image copy 16.png",
  "image copy 17.png",
  "image copy 18.png",
  "image copy 2.png",
  "image copy 3.png",
  "image copy 4.png",
  "image copy 5.png",
  "image copy 6.png",
  "image copy 7.png",
  "image copy 8.png",
  "image copy 9.png",
  "image copy.png",
  "image.png",
]

export default function GalleryPage() {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})
  const [modalSrc, setModalSrc] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalSrc(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalSrc ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [modalSrc])

  return (
    <main className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-foreground">SAJJAN'S Gallery</h1>
          <p className="text-muted-foreground mt-2">Click any image to view fullscreen on the site.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryFiles.map((filename, idx) => {
            const src = `/gallery/${encodeURIComponent(filename)}`
            const isLoaded = !!loaded[filename]
            return (
              <button
                key={idx}
                onClick={() => setModalSrc(src)}
                className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-muted flex items-center justify-center p-0"
                aria-label={`Open ${filename}`}
              >
                <div className="relative w-full h-44 sm:h-52 md:h-48 lg:h-56 flex items-center justify-center bg-muted">
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
                  )}

                  <img
                    src={src}
                    alt={filename}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoaded((s) => ({ ...s, [filename]: true }))}
                    className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {modalSrc ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg z-50"
              onClick={() => setModalSrc(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="w-full h-[70vh] flex items-center justify-center">
              <img src={modalSrc} alt="Full" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}
