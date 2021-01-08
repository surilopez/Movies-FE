import { ActorMovieDTO } from "../Actors/actor";
import { TheaterDTO } from "../Theaters/theater";
import { GenreDTO } from "./genre";

export interface MovieCreationDTO {
  Title: string,
  Info: string,
  onTheater: boolean,
  Trailer: string,
  ReleaseDate: Date,
  Img: File,
  GenresId:number[],
  TheatersId:number[],
  Actors:ActorMovieDTO[],

}
export interface MovieDTO {
  title: string,
  info: string,
  onTheater: boolean,
  trailer: string,
  releaseDate: Date,
  img: string,
  genresDTO: GenreDTO[],
  movieActorsDTO:ActorMovieDTO[],
  theaterDTO:TheaterDTO[]
}

export interface MoviesPostGet{
  genres: GenreDTO[];
  theaters: TheaterDTO[];
}
