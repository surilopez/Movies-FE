export interface ActorDTO {
  id: number,
  name: string,
  dateOfBirth: Date,
  photo: string,
  biography: string
}

export interface ActorCreationDTO {
  name: string,
  dateOfBirth: Date,
  photo: File,
  biography: string
}

export interface ActorMovieDTO {
  id: number,
  name: string,
  character: string,
  photo: string,
}
