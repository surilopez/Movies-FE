export interface ActorDTO{
  Name: string;
  DateOfBirth: Date,
  ActorImage: string
}

export interface ActorCreationDTO {
  Name: string;
  DateOfBirth: Date,
  ActorImage: File,
  Biography: string
}
