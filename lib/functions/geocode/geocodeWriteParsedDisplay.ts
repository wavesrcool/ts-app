/*
interface IGeocodeWritelistdDisplay {
  country: string
  city: string
  state: string
  address: string
}
*/

export const geocodeWriteParsedDisplay = (list: string[]): string => {
  const country = list[0]
  const state = list[1]
  const address = list.pop()
  const city = list.slice(-1)[0]

  const str = `${address}, ${city}, ${state}, ${country}`
  return str.length > 50 ? `${address}, ${city}, ${country}` : str
}
