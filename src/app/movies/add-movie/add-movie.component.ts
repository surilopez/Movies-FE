import { Component, OnInit } from '@angular/core';
import { MovieCreationDTO } from 'src/app/Models/movies';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  KeepChanges(movie: MovieCreationDTO){
    console.log(movie)
  }
}
