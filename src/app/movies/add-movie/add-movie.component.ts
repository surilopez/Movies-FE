import { Component, OnInit } from '@angular/core';
import { MovieCreationDTO } from 'src/app/Models/movies';
import { SelectorMultiple } from 'src/app/Models/SelectorMultiple';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  NoSelectedGenres: SelectorMultiple[] = []
  NoSelectedTheaters: SelectorMultiple[] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.postGet().subscribe(
      result => {
        this.NoSelectedGenres = result.genres.map(genre => {
          return <SelectorMultiple>{ key: genre.id, value: genre.name }
        })

        this.NoSelectedTheaters = result.theaters.map(theather => {
          return <SelectorMultiple>{ key: theather.id, value: theather.name }
        })
      }, error => {
        console.log(error)
      })
  }

  KeepChanges(movie: MovieCreationDTO) {
    console.log(movie)
  }
}
