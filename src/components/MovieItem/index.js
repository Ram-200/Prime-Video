import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMovieItem, onClosePopup} = props
  const videoUrl = eachMovieItem?.videoUrl || ''

  const getEmbedUrl = () => {
    if (!videoUrl) {
      return ''
    }

    try {
      const parsedUrl = new URL(videoUrl)
      const {hostname, pathname} = parsedUrl
      let videoId = ''

      if (
        hostname === 'www.youtube.com' ||
        hostname === 'youtube.com' ||
        hostname === 'm.youtube.com'
      ) {
        if (pathname === '/watch') {
          videoId = parsedUrl.searchParams.get('v') || ''
        } else if (pathname.startsWith('/shorts/')) {
          videoId = pathname.split('/')[2] || ''
        } else if (pathname.startsWith('/embed/')) {
          videoId = pathname.split('/')[2] || ''
        }
      } else if (hostname === 'youtu.be') {
        videoId = pathname.split('/')[1] || ''
      }

      if (!videoId) {
        return ''
      }

      return `https://www.youtube.com/embed/${videoId}`
    } catch (error) {
      return ''
    }
  }

  const embedUrl = getEmbedUrl()

  return (
    <Popup modal open onClose={onClosePopup} className="popup-content">
      {close => (
        <div className="popup">
          <button
            type="button"
            data-testid="closeButton"
            className="close-btn"
            onClick={() => {
              close()
              onClosePopup()
            }}
            aria-label="Close popup"
          >
            <IoMdClose />
          </button>

          <div className="video-container">
            {embedUrl !== '' && (
              <iframe
                src={embedUrl}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
