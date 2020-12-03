import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css']
})
export class FilterMovieComponent implements OnInit {

  Movies = [
    {
      Title: 'The Lord Of the Ring ',
      GenreID: [2, 5],
      CommingSoon: false,
      onTheaters: true,
      Img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      Title: 'Harry Potter and The Sorcerer Stone',
      GenreID: [2, 4],
      CommingSoon: false,
      onTheaters: true,
      Img: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      Title: 'Moana',
      GenreID: [1, 4],
      CommingSoon: true,
      onTheaters: false,
      Img: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      Title: 'The Shawshank Redemption',
      GenreID: [2, 4],
      CommingSoon: false,
      onTheaters: false,
      Img: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      Title: 'The Dark Knight ',
      GenreID: [2, 4],
      CommingSoon: false,
      onTheaters: true,
      Img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
  ]
  constructor(
    private formbuilder: FormBuilder
  ) { }

  SearchMovieForm!: FormGroup
  Genres = [
    { id: 0, Name: "All Genres" },
    { id: 1, Name: "Comedy" },
    { id: 2, Name: "Adventure" },
    { id: 3, Name: "Romantic" },
    { id: 4, Name: "Dramas" },
    { id: 5, Name: "Action" },
  ]


  InitForm = {
    Title: '',
    GenreID: 0,
    CommingSoon: false,
    onTheaters: false
  }

  ngOnInit(): void {
    this.SearchMovieForm = this.formbuilder.group(this.InitForm)

    this.SearchMovieForm.valueChanges.subscribe(values => {
      this.Movies = this.allMovies;
      this.FilterMovies(values)
    })

  }

  allMovies = this.Movies
  FilterMovies(values: any) {
    if (values.Title) {
      this.Movies = this.Movies.filter(movie => movie.Title.indexOf(values.Title) !== -1)
    }

    if (values.GenreID !== 0) {
      this.Movies = this.Movies.filter(movie => movie.GenreID.indexOf(values.GenreID) !== -1)
    }

    if (values.CommingSoon) {
      this.Movies = this.Movies.filter(movie => movie.CommingSoon)
    }
    if (values.onTheaters) {
      this.Movies = this.Movies.filter(movie => movie.onTheaters)
    }

  }
  CleanFilters() {
    this.SearchMovieForm.patchValue(this.InitForm)
    this.Movies = this.allMovies;
  }
}
