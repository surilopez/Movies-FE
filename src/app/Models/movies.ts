import { TheaterDTO } from "../Theaters/theater";
import { GenreDTO } from "./genre";

export interface MovieCreationDTO {
  Title: string,
  Info: string,
  onTheater: boolean,
  Trailer: string,
  ReleaseDate: Date,
  Img: File
}
export interface MovieDTO {
  Title: string,
  Info: string,
  onTheater: boolean,
  Trailer: string,
  ReleaseDate: Date,
  Img: string
}

export interface MoviesPostGet{
  genres: GenreDTO[];
  theaters: TheaterDTO[];
}
