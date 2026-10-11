import Slider from 'react-slick'
// import {useState} from 'react'
// import MoviesSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {moviesList, onChangeMovieTrailer} = props
  //   const [selectedMovie, setSelectedMovie] = useState(null)

  const PrevArrow = arrowProps => {
    const {
      currentSlide,
      slideCount,
      moviesList: arrowMoviesList,
      ...buttonProps
    } = arrowProps

    return (
      <button
        {...buttonProps}
        type="button"
        className={`arrow-button ${buttonProps.className || ''}`}
        aria-label="Previous movies"
      >
        {'<'}
      </button>
    )
  }

  const NextArrow = arrowProps => {
    const {
      currentSlide,
      slideCount,
      moviesList: arrowMoviesList,
      ...buttonProps
    } = arrowProps

    return (
      <button
        {...buttonProps}
        type="button"
        className={`arrow-button ${buttonProps.className || ''}`}
        aria-label="Next movies"
      >
        {'>'}
      </button>
    )
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div className="movies-list">
      <Slider {...settings}>
        {moviesList.map(eachMovieItem => (
          <button
            key={eachMovieItem.id}
            className="movie-item"
            type="button"
            onClick={event =>
              onChangeMovieTrailer(
                eachMovieItem,
                event.currentTarget.getBoundingClientRect(),
              )
            }
          >
            {' '}
            <img
              src={eachMovieItem.thumbnailUrl}
              alt="thumbnail"
              className="movie-logo"
            />{' '}
          </button>
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
