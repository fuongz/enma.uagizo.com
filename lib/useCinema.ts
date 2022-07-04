import { fetcher } from './fetcher'

export const useCinema = () => {
  const getSchedule = async (theater: string) => {
    let url: string = ''

    if (theater === 'cgv') {
      url = '/api/cgv'
    } else if (theater === 'galaxy') {
      url = '/api/galaxy'
    }

    const data = await fetcher(url)

    if (data.status === 0) {
      return {
        error: true,
        message: data.message,
        data: [],
      }
    }

    return {
      error: false,
      data: data.data,
      message: '',
    }
  }

  return {
    getSchedule,
  }
}
