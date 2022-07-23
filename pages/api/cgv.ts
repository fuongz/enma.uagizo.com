import { fetcher } from 'lib/fetcher'
import type { NextApiRequest, NextApiResponse } from 'next'
import { JSDOM } from 'jsdom'
import { ShowTime } from 'types/Showtime'
import StringUtils from 'utils/StringUtils'
import dayjs from 'dayjs'
import MovieCached from '../../public/movie-cached.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const cgvUrl: string = process.env.CVG_URL || ''

  const data = await fetcher(cgvUrl, 'text')

  const DOM = new JSDOM(data)

  const cgv = DOM.window.document.querySelectorAll('.showtimes > .card')

  const result: ShowTime[] = Array.from(cgv).map((cgv: Element): ShowTime => {
    // Title
    const title = cgv?.querySelector('.card-title')?.textContent

    // Id
    const id = cgv?.getAttribute('data-movie-id') ?? ''

    // Slug
    const slug = cgv?.getAttribute('data-movie') ?? ''

    // Get data from cached
    const cached = MovieCached.find((movie: any) => movie.slug === slug)

    // Duration
    const duration = StringUtils.getContent(cgv?.querySelector('.card-text')?.textContent)
    const durationArray = duration?.split(' · ')
    const rateString = durationArray?.[1] ?? ''
    const durationString = durationArray?.[2] ?? ''
    const durationText = StringUtils.convertH2M(durationString?.trim())
    const rateText = rateString?.trim()

    // Show date
    const showDate = dayjs().format('YYYY-MM-DD')

    // Sessions
    const sessions = cgv?.querySelectorAll('.card-body > .row > .col.ml-n2 > .mt-2 > .mb-1')

    const sessionsResult: any[] = Array.from(sessions).map((session: Element): any => {
      const captionAndVersionRaw = session?.querySelector('label.small')?.textContent?.trim()
      const captionAndVersionArray = captionAndVersionRaw ? captionAndVersionRaw.split(' ') : []
      const version = captionAndVersionArray ? captionAndVersionArray.shift() : ''

      const bundles = session.querySelectorAll('.btn-showtime:not(.disabled)')

      return {
        version,
        caption: captionAndVersionArray ? captionAndVersionArray.join(' ') : '',
        bundles: Array.from(bundles).map((bundle: Element): any => {
          const text = StringUtils.getContent(bundle.textContent)
          return {
            text: text?.split(' ').shift(),
            isStarium: text?.includes('Starium'),
          }
        }),
      }
    })

    console.log(sessionsResult)

    return { id, slug, thumbnail: cached ? cached.thumbnail : '', title: StringUtils.getContent(title) ?? 'Unknown', duration: durationText ?? 0, rate: rateText, showDate, sessions: sessionsResult }
  })

  return res.status(200).json({ status: 1, data: result })
}
