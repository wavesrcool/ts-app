export interface IGeocodeCompleteBasisOption {
  label: string
  id: string
}

export interface IGeocodeCompleteBasisAddress {
  label: string
  alpha3: string
  state: string
  city: string
  //district: string
  street: string
  number: string
  postal: string
}

export interface IGeocodeLocation {
  type: `whole` | `general`
  number: string
  street: string
  city: string
  postal: string
  district: string
  state: string
  alpha3: string
  label: string
  key: string
  lat: string
  lng: string
  geohash: string
}
