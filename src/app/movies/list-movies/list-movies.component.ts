import { Component, Input, OnInit, Output } from '@angular/core';
import { MovieDTO } from 'src/app/Models/movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor() { }

  @Input()
  Movies: MovieDTO[] = [];

  ngOnInit(): void {

  }

  Remove(x: Number): void {

  }

}
