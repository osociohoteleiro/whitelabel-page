import { useState, useEffect } from 'react'
import { X, Play } from 'lucide-react'

export default function FloatingVideoWidget({ videoUrl }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent >= 10 && !isVisible) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed, isVisible])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    setIsPlaying(false)
  }

  const getYouTubeId = () => {
    if (!videoUrl) return null
    const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/)
    return match ? match[1] : null
  }

  const youtubeId = getYouTubeId()

  if (!isVisible || !youtubeId) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600">
          <span className="text-white text-sm font-medium flex items-center gap-2">
            <Play className="w-4 h-4" />
            Veja como funciona
          </span>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Container */}
        <div className="w-80 aspect-video bg-black">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title="Demonstração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-full h-full relative group cursor-pointer"
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt="Thumbnail do vídeo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                }}
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
