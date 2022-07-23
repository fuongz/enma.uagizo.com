export const fetcher = (url: string, type: string = 'json') => fetch(url).then((res: Response) => (type === 'json' ? res.json() : res.text()))
