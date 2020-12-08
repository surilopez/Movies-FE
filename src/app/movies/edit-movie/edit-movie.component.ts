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
    Title: 'The Christmas Chronicles 2',
    Trailer: 'https://www.youtube.com/watch?v=HVzBwSOcBaI',
    Info: 'Kate Pierce, now a cynical teen, is unexpectedly reunited with Santa Claus when a mysterious troublemaker threatens to cancel Christmas - forever.',
    onTheater: true,
    ReleaseDate: new Date("12-01-2020"),
    Img:'https://m.media-amazon.com/images/M/MV5BMGJiZDc1OWMtNzMwMC00NzM0LTljMDgtZGJjODVhZDMzMmJjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'

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
