import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/Services/genre.service';

@Component({
  selector: 'app-index-genre',
  templateUrl: './index-genre.component.html',
  styleUrls: ['./index-genre.component.css']
})
export class IndexGenreComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    const genre = this.genreService.GetAllGenres();
    console.log(genre);
  }

}
