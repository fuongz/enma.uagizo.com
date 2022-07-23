import { FC, useEffect } from 'react'
import { ShowTime } from 'types/Showtime'
import { MovieComponent } from './Movie'

interface MovieListProps {
  movies: ShowTime[]
}

export const MovieListComponent: FC<MovieListProps> = (props: MovieListProps) => {
  const { movies } = props

  return <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">{movies && movies.map((movie) => <MovieComponent key={movie.id} movie={movie} />)}</div>
}
