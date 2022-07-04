import { FC, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

interface MovieProps {
  schedule: Schedule
}

export const MovieComponent: FC<MovieProps> = (props: MovieProps) => {
  const [dates, setDates] = useState<ScheduleDate[] | any>([])

  const { schedule } = props

  const thumbnail = () => {
    const imageUri = 'https://www.galaxycine.vn'
    return `${imageUri}${schedule.imagePortrait}`
  }

  useEffect(() => {
    const dates: ScheduleDate | any = schedule?.dates && schedule?.dates.length > 0 ? schedule?.dates[0] : null
    setDates(dates)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {schedule ? (
        <div className="relative">
          <div className="relative w-full movie__thumbnail">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-fit shadow rounded" src={thumbnail()} alt={schedule.id} />

            {schedule.trailer && (
              <div className="absolute top-0 left-0 bg-zinc-900 bg-opacity-50 h-full w-full movie__thumbnail-overlay">
                <a target="_blank" className="absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 block">
                  <Icon icon="bi:play-fill" className="text-white bg-transparent opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 hover:transition transition text-5xl fill-current" />
                </a>
              </div>
            )}
          </div>
          <h5 className="font-medium tracking-tight text-lg pt-2">{schedule.name}</h5>

          {schedule.startdate && schedule.enddate && (
            <p className="text-opacity-50 text-white text-sm mt-2">
              Công chiếu từ
              <span className="text-opacity-80 text-white">{schedule.startdate}</span>
              &rightarrow;
              <span className="text-opacity-80 text-white">{schedule.enddate}</span>
            </p>
          )}

          {schedule.duration && <span className="text-zinc-500 block"> {schedule.duration} phút </span>}

          {dates && dates.bundles && dates.bundles.length > 0 && <>OK</>}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
