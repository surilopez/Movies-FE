export interface Coordinates {
  Latitude: number,
  Longitude: number
}

export interface CoordinatesWithMesage extends Coordinates {
  message: string
}
