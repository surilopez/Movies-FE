import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieDTO } from 'src/app/Models/movies';
import { MoviesService } from 'src/app/Services/movies.service';
import { RaitingService } from 'src/app/Services/raiting.service';
import { Coordinates, CoordinatesWithMesage } from 'src/app/Utils/maps/position';
import Swal from 'sweetalert2';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private ratingService: RaitingService,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  movieDTO!: MovieDTO
  releaseDate: Date = new Date();
  trailerURL?: SafeResourceUrl
  locations: CoordinatesWithMesage[] = []

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.moviesService.GetByID(params.id).subscribe(movie => {

        this.movieDTO = movie;
        this.releaseDate = new Date(movie.releaseDate)
        this.trailerURL = this.GenerateURLYoutubeEmbed(movie.trailer)

        this.locations = movie.theaterDTO.map(theater => {
          return {
            Longitude: theater.longitude,
            Latitude: theater.latitude,
            message: theater.name
          }
        })
      })
    })
  }


  private GenerateURLYoutubeEmbed(url: any): SafeResourceUrl {
    if (!url) {
      return '';
    }

    var video_id = url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition)
    }
    return this.sanitizer
      .bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`);
  }

  RateMovie(rate: number): void {
    this.ratingService.Rate(this.movieDTO.id, rate)
      .subscribe(() => {
        Swal.fire("Success", "Your vote has been received",'success')
      })

  }
}
