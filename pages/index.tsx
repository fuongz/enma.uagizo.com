import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useCinema } from 'lib/useCinema'
import { LoadingComponent } from '@/components/common/loading'
import { MovieListComponent } from '@/components/cinema/MovieList'

const Home: NextPage = () => {
  const [schedules, setSchedules] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { getSchedule } = useCinema()

  const fetchSchedule = async () => {
    setIsLoading(true)
    const { error, data } = await getSchedule('galaxy')

    if (error === false) {
      setSchedules(data)
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
        <title>@phakedev/next-template</title>
      </Head>

      <main>
        <div className="container mx-auto px-4 2xl:px-0 py-16">
          <div className="text-center">
            <h1 className="text-2xl leading-none font-medium text-center text-white text-opacity-90 tracking-tight mb-2">Lịch chiếu phim</h1>
            <p className="text-white text-opacity-50 tracking-tight mb-10">Lịch chiếu phim tại cụm rạp Galaxy Linh Trung</p>
          </div>

          <LoadingComponent isLoading={isLoading}>
            <MovieListComponent schedules={schedules} />
          </LoadingComponent>

          <div className="text-center mt-8 md:mt-16">
            <h1 className="text-2xl font-medium text-center text-white text-opacity-90 tracking-tight mb-2">Phim chuẩn bị công chiếu</h1>
            <p className="text-white text-opacity-50 tracking-tight mb-10">Tất cả phim chuẩn bị công chiếu tại Galaxy Cinema</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
