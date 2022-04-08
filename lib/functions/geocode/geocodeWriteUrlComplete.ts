import { __here_url_auto__ } from '../../reference/geocode/here'

export const geocodeWriteUrlComplete = (
  query: string,
  results: number
): string => {
  return __here_url_auto__ + `&query=${query}&maxresults=${results}`
}
