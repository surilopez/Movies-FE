import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor() { }

  @Input()
  MoviesOnTheaters: any;

  ngOnInit(): void {

  }

  Remove(x: Number):void{

  }

}
