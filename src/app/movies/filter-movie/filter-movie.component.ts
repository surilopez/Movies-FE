import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { MovieDTO } from 'src/app/Models/movies';
import { GenreDTO } from 'src/app/Models/genre';
import { GenreService } from 'src/app/Services/genre.service';
import { MoviesService } from 'src/app/Services/movies.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css']
})
export class FilterMovieComponent implements OnInit {


  constructor(
    private formbuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private genreService: GenreService,
    private moviesServices: MoviesService
  ) { }

  SearchMovieForm!: FormGroup
  Genres: GenreDTO[] = []
  Movies: MovieDTO[] = []

  actualPage = 1;
  recordsToshow = 10;
  TotalRecords: number = 0;

  InitForm = {
    Title: '',
    genreID: 0,
    commingSoon: false,
    onTheaters: false
  }


  ngOnInit(): void {
    this.genreService.GetAll().subscribe(genres => {
      this.Genres = genres
      console.log(this.Genres)
    })
    this.SearchMovieForm = this.formbuilder.group(this.InitForm)
    this.FilterMovies(this.SearchMovieForm.value)
    this.filterByURLValues()
    this.SearchMovieForm.valueChanges.subscribe(values => {
     this.FilterMovies(values)
      this.UpdateUrlByParamFilter();
    })


  }


  FilterMovies(values: any) {
    console.log(values)
    values.page = this.actualPage
    values.recordsToShow = this.recordsToshow
    this.moviesServices.filter(values).subscribe(response => {
      this.Movies = response.body
      this.UpdateUrlByParamFilter();

      this.TotalRecords = response.body.length
    })

  }

  private filterByURLValues() {
    this.activatedRoute.queryParams.subscribe((param) => {
      var obj: any = {}

      console.log(param)
      if (param.Title) {
        obj.Title = param.Title

      }
      if (param.genreID) {
        obj.genreID = Number(param.genreID)

      }
      if (param.commingSoon) {
        obj.commingSoon = param.commingSoon

      }
      if (param.onTheaters) {
        obj.onTheaters = param.onTheaters

      }
      console.log(obj)

      this.SearchMovieForm.patchValue(obj)


    })
  }

  private UpdateUrlByParamFilter() {
    var queryStrings = [];
    var formValues = this.SearchMovieForm.value;
    if (formValues.Title) {
      queryStrings.push(`Title=${formValues.Title}`)
    }
    if (formValues.genreID) {
      queryStrings.push(`genreID=${formValues.genreID}`)
    }
    if (formValues.commingSoon) {
      queryStrings.push(`commingSoon=${formValues.commingSoon}`)
    }
    if (formValues.onTheaters) {
      queryStrings.push(`onTheaters=${formValues.onTheaters}`)
    }
    this.location.replaceState('Movie/Search', queryStrings.join('&'))
  }



  CleanFilters() {
    this.SearchMovieForm.patchValue(this.InitForm)

  }

  UpdatePagination(data: PageEvent) {
    this.actualPage = data.pageIndex + 1;
    this.recordsToshow = data.pageSize
    this.FilterMovies(this.SearchMovieForm.value)
  }
}
