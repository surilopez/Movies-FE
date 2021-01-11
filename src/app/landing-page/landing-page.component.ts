import { Component, OnInit } from '@angular/core';
import { MovieDTO } from '../Models/movies';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  onTheaters: MovieDTO[] = []
  commingSoom: MovieDTO[] = []

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.GetLandingPage().subscribe(landingPage => {
      this.onTheaters = landingPage.onTheaters
      this.commingSoom = landingPage.commingSoom


    })



  }

}
