export const geocodeWriteUrlLocation = (location: string): string => {
  return `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${location}&jsonattributes=1&gen=9&apiKey=${process.env.APP_ROOT_API_HERE_API_KEY}`
}
