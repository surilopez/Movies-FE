import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  MoviesOnTheaters:any
  NewMovies = [{}]
  constructor() { }

  ngOnInit(): void {

    this.MoviesOnTheaters = [
      {
        Title: 'The Lord Of the Ring ',
        StartDate: new Date('2018-01-23'),
        Price: 333.56,
        Img:'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },   {
        Title: 'Harry Potter and The Sorcerer Stone',
        StartDate: new Date('2012-04-23'),
        Price: 432,
        Img:'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },]

  }

}
