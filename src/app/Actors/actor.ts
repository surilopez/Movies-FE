export interface ActorDTO{
  id:number,
  name: string,
  dateOfBirth: Date,
  photo: string,
  biography: string
}

export interface ActorCreationDTO {
  name: string;
  dateOfBirth: Date,
  photo: File,
  biography: string
}
