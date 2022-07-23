import { FC } from 'react'
import { ShowTime } from 'types/Showtime'
import styles from '@/styles/Movie.module.css'

interface MovieProps {
  movie: ShowTime
}

export const MovieComponent: FC<MovieProps> = (props: MovieProps) => {
  const { movie } = props

  return (
    <>
      {movie ? (
        <div className="relative pb-12">
          <div className={styles['movie__thumbnail']}>
            {movie.thumbnail !== '' ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-fit shadow rounded" src={movie.thumbnail} alt={movie.slug} />
              </>
            ) : (
              <></>
            )}
          </div>

          <h5 className="font-medium tracking-tight text-lg pt-2">{movie.title}</h5>

          {movie.duration && <span className="text-zinc-500 block"> {movie.duration} phút </span>}

          <p className="mt-4 text-sm text-zinc-300 tracking-tight font-semibold">{movie.showDate}</p>

          {movie.sessions && movie.sessions.length > 0 ? (
            movie.sessions.map((session) => (
              <>
                <p className="text-xs mt-4 text-zinc-400 tracking-tight">
                  <span className="bg-zinc-800 rounded-sm px-1.5 py-0.5">{session.caption}</span>
                  <span className="bg-indigo-800 rounded-sm px-1.5 py-0.5 ml-1">{session.version}</span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {session.bundles &&
                    session.bundles?.map((bundle: any) => (
                      <>
                        <span className="relative rounded text-sm hover:text-zinc-100 hover:border-zinc-400 cursor-pointer px-3 py-2 border border-zinc-700 text-zinc-400 text-center hover:transition transtion">
                          {bundle.text}
                          {bundle.isStarium ? (
                            <>
                              <span className="text-xs absolute text-rose-500 -top-2 left-1/2 transform -translate-x-1/2">Starium</span>
                            </>
                          ) : (
                            <></>
                          )}
                        </span>
                      </>
                    ))}
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
