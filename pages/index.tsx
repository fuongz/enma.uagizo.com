import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useCinema } from 'lib/useCinema'
import { LoadingComponent } from '@/components/common/loading'
import { MovieListComponent } from '@/components/cinema/MovieList'
import { MovieListComponent as MovieListV2Component } from '@/components/Movie/MovieList'

const Home: NextPage = () => {
  const [schedules, setSchedules] = useState<any[]>([])
  const [cvgMovies, setCvgMovies] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { getSchedule } = useCinema()

  const fetchSchedule = async () => {
    setIsLoading(true)
    const { error, data } = await getSchedule('galaxy')
    const { error: errorCvg, data: dataCvg } = await getSchedule('cgv')

    if (error === false) {
      setSchedules(data)
    }

    console.log(dataCvg)

    if (errorCvg === false) {
      setCvgMovies(dataCvg)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchSchedule()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Enma Ai - Ủa Gì Zợ CHẤM Com</title>
      </Head>

      <main>
        <div className="container mx-auto px-4 2xl:px-0 py-16">
          <div className="cinema">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl leading-none font-medium text-center text-white text-opacity-90 tracking-tight mb-2">Galaxy Linh Trung</h1>
              <p className="text-white text-sm lg:text-xl text-opacity-50 tracking-tight mb-10">Lịch chiếu phim tại cụm rạp Galaxy Linh Trung</p>
            </div>

            <LoadingComponent isLoading={isLoading}>
              <MovieListComponent schedules={schedules} />
            </LoadingComponent>
          </div>

          <div className="cinema mt-8">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl leading-none font-medium text-center text-white text-opacity-90 tracking-tight mb-2">CGV Vincom Thủ Đức</h1>
              <p className="text-white text-sm lg:text-xl text-opacity-50 tracking-tight mb-10">Lịch chiếu phim tại cụm rạp CGV Vincom Thủ Đức</p>
            </div>

            <LoadingComponent isLoading={isLoading}>
              <MovieListV2Component movies={cvgMovies} />
            </LoadingComponent>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
