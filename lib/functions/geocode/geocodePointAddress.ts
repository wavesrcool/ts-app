import axios from 'axios'
import { IGeocodeCompleteBasisAddress } from '../../interfaces/geocode'
import { geocodeWriteUrlLocation } from './geocodeWriteUrlLocation'

export const geocodePointAddress = async (
  location: string
): Promise<IGeocodeCompleteBasisAddress | null> => {
  try {
    const {
      data: { response },
    } = await axios.get(geocodeWriteUrlLocation(location))

    if (
      response.view[0] &&
      response.view[0].result[0] &&
      response.view[0].result[0].matchLevel === `houseNumber`
    ) {
      const obj: IGeocodeCompleteBasisAddress = {
        label: response.view[0].result[0].location.address.label,
        alpha3: response.view[0].result[0].location.address.country,
        state: response.view[0].result[0].location.address.state,
        city: response.view[0].result[0].location.address.city,
        street: response.view[0].result[0].location.address.street,
        number: response.view[0].result[0].location.address.houseNumber,
        postal: response.view[0].result[0].location.address.postalCode,
      }

      return obj
    }

    return null
  } catch (e) {
    return null
  }
}
