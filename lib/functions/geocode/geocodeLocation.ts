import axios from 'axios'
import { IGeocodeLocation } from '../../interfaces/geocode'
import { geocodeWriteUrlLocation } from './geocodeWriteUrlLocation'
import geohash from 'ngeohash'

export const geocodeLocation = async (
  location: string
): Promise<IGeocodeLocation | null> => {
  const {
    data: { response },
  } = await axios.get(geocodeWriteUrlLocation(location))

  if (response.view[0] && response.view[0].result[0]) {
    const result = response.view[0].result[0]

    const location: IGeocodeLocation = {
      type: result.location.address.houseNumber ? `whole` : `general`,
      number: result.location.address.houseNumber,
      street: result.location.address.street,
      city: result.location.address.city,
      postal: result.location.address.postalCode,
      district: result.location.address.district,
      state: result.location.address.state,
      alpha3: result.location.address.country,
      label: result.location.address.label,
      key: result.location.locationId,
      lat: result.location.displayPosition.latitude,
      lng: result.location.displayPosition.longitude,
      geohash: geohash.encode(
        Number(result.location.displayPosition.latitude),
        Number(result.location.displayPosition.longitude)
      ),
    }

    return location
  }
  return null
}
