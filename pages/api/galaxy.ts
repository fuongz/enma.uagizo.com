import { fetcher } from 'lib/fetcher'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const url = process.env.API_GALAXY_CINE

    const data = await fetcher(`${url}/session/cinema/1020`)

    return res.status(200).json({
      status: 1,
      data,
    })
  }

  return res.status(404).json({
    status: 0,
    message: 'Not found',
  })
}
