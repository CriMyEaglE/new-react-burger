export type TOptions = {
   method?: string,
   headers: {
      'Content-Type': string
   },
   body?: string
}
export const checkResponse = (res: Response) => {
   if (res.ok) {
      return res.json()
   }
   return Promise.reject(`Ошибка ${res.status}`)
}

export const request = async (url: string, options?: TOptions): Promise<any> => {
   const res = await fetch(url, options)
   return checkResponse(res)
}