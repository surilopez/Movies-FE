export interface ActorDTO{
  id:number,
  name: string,
  dateOfBirth: Date,
  actorImage: string,
  biography: string
}

export interface ActorCreationDTO {
  name: string;
  dateOfBirth: Date,
  actorImage: File,
  biography: string
}
