import { useEffect } from 'react'
import { X, Play } from 'lucide-react'

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Detectar tipo de vídeo e extrair ID
  const getVideoEmbed = () => {
    if (!videoUrl) return null

    // YouTube
    const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/)
    if (youtubeMatch) {
      return (
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`}
          title="Demonstração"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }

    // Vimeo
    const vimeoMatch = videoUrl.match(/vimeo\.com\/(\d+)/)
    if (vimeoMatch) {
      return (
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`}
          title="Demonstração"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )
    }

    // URL direta de vídeo
    return (
      <video
        className="w-full aspect-video rounded-lg"
        src={videoUrl}
        controls
        autoPlay
      />
    )
  }

  const videoEmbed = getVideoEmbed()

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 animate-in fade-in zoom-in duration-200">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Conteúdo */}
        {videoEmbed ? (
          videoEmbed
        ) : (
          /* Placeholder quando não há vídeo */
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-500/20 flex items-center justify-center">
              <Play className="w-12 h-12 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Vídeo em breve
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Estamos preparando um vídeo demonstrativo incrível para você.
              Enquanto isso, teste grátis por 7 dias e descubra na prática!
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Fechar e testar grátis
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
