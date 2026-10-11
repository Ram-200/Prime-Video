import {Component} from 'react'
import MovieItem from '../MovieItem'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  state = {
    selectedMovie: null,
  }

  onChangeMovieTrailer = movie => {
    this.setState({
      selectedMovie: movie,
    })
  }

  onClosePopup = () => {
    this.setState({
      selectedMovie: null,
    })
  }

  render() {
    const {moviesList} = this.props
    const {selectedMovie} = this.state

    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )

    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />

        <div className="movies-container">
          <h1>Action Movies</h1>
          <MoviesSlider
            moviesList={actionMovies}
            onChangeMovieTrailer={this.onChangeMovieTrailer}
          />

          <h1>Comedy Movies</h1>
          <MoviesSlider
            moviesList={comedyMovies}
            onChangeMovieTrailer={this.onChangeMovieTrailer}
          />
        </div>

        {selectedMovie !== null && (
          <MovieItem
            eachMovieItem={selectedMovie}
            onClosePopup={this.onClosePopup}
          />
        )}
      </div>
    )
  }
}

export default PrimeVideo
