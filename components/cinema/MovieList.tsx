import { FC } from 'react'
import { MovieComponent } from './Movie'

interface MovieListProps {
  schedules: Schedule[]
}

export const MovieListComponent: FC<MovieListProps> = (props: MovieListProps) => {
  return (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
      {props.schedules && props.schedules.map((schedule) => <MovieComponent schedule={schedule} key={schedule.id} />)}
    </div>
  )
}
