import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorMovieDTO } from 'src/app/Actors/actor';
import { MovieCreationDTO, MovieDTO } from 'src/app/Models/movies';
import { SelectorMultiple } from 'src/app/Models/SelectorMultiple';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  model!: MovieDTO
  selectedGenresDTO: SelectorMultiple[] = []
  noSelectedGenresDTO: SelectorMultiple[] = []
  selectedTheaterDTO: SelectorMultiple[] = []
  noSelectedTheaterDTO: SelectorMultiple[] = []
  selectedActors: ActorMovieDTO[] = [];


  constructor(
    private activedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.moviesService.putGet(params.id).subscribe(moviePutGet => {

        this.model = moviePutGet.movie
        this.noSelectedGenresDTO = moviePutGet.noselectedGenresDTO.map(genre => {
          return <SelectorMultiple>{ key: genre.id, value: genre.name }
        })
        this.selectedGenresDTO = moviePutGet.selectedGenresDTO.map(genre => {
          return <SelectorMultiple>{ key: genre.id, value: genre.name }
        })

        this.noSelectedTheaterDTO = moviePutGet.noSelectedTheaterDTO.map(theather => {
          return <SelectorMultiple>{ key: theather.id, value: theather.name }
        })

        this.selectedTheaterDTO = moviePutGet.selectedTheaterDTO.map(theather => {
          return <SelectorMultiple>{ key: theather.id, value: theather.name }
        })
        this.selectedActors = moviePutGet.movieActorsDTO;
      }, error => {
        console.log(error)
      })
    })


  }
  KeepChanges(movie: MovieCreationDTO) {
    this.moviesService.Edit(this.model.id,movie).subscribe(()=>{
      this.router.navigate(['/Movie/'+this.model.id])
    })
  }
}
