export const fetcher = (url: string) => fetch(url).then((res: Response) => res.json())
