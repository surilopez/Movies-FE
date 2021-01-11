import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCreationDTO, MovieDTO } from 'src/app/Models/movies';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  model: MovieDTO = {
    id:0,
    title: 'The Christmas Chronicles 2',
    trailer: 'https://www.youtube.com/watch?v=HVzBwSOcBaI',
    info: 'Kate Pierce, now a cynical teen, is unexpectedly reunited with Santa Claus when a mysterious troublemaker threatens to cancel Christmas - forever.',
    onTheater: true,
    releaseDate: new Date("12-01-2020"),
    img:'https://m.media-amazon.com/images/M/MV5BMGJiZDc1OWMtNzMwMC00NzM0LTljMDgtZGJjODVhZDMzMmJjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    genresDTO: [],
    movieActorsDTO: [],
    theaterDTO: []
  }

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })


  }
  KeepChanges(movie: MovieCreationDTO) {
    console.log(movie)
  }
}
