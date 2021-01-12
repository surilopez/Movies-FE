import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MovieDTO } from 'src/app/Models/movies';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  @Input()
  Movies: MovieDTO[] = [];

  @Output()
  MovieWasDelete: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {

  }

  delete(movieId: Number): void {
    this.moviesService.delete(movieId).subscribe(() => {
      this.MovieWasDelete.emit();
    })
  }

}
