import { ActorMovieDTO } from "../Actors/actor";
import { TheaterDTO } from "../Theaters/theater";
import { GenreDTO } from "./genre";

export interface MovieCreationDTO {
  title: string,
  info: string,
  onTheater: boolean,
  trailer: string,
  releaseDate: Date,
  Img: File,
  GenresId:number[],
  TheatersId:number[],
  Actors:ActorMovieDTO[],

}
export interface MovieDTO {
  id:number,
  title: string,
  info: string,
  onTheater: boolean,
  trailer: string,
  releaseDate: Date,
  img: string,
  genresDTO: GenreDTO[],
  movieActorsDTO:ActorMovieDTO[],
  theaterDTO:TheaterDTO[],
  averageVote:number,
  userVote:number
}

export interface MoviesPostGet{
  genres: GenreDTO[];
  theaters: TheaterDTO[];
}

export interface MoviesPutGet{

  movie: MovieDTO,
  selectedGenresDTO: GenreDTO[],
  noselectedGenresDTO: GenreDTO[],
  movieActorsDTO: ActorMovieDTO[],
  selectedTheaterDTO: TheaterDTO[],
  noSelectedTheaterDTO: TheaterDTO[]

}


export interface LandingPageDTO{
  onTheaters: MovieDTO[],
  commingSoom:MovieDTO[];
}
