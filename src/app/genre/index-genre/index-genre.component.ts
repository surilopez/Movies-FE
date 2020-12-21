import { Component, OnInit } from '@angular/core';
import { GenreDTO } from 'src/app/Models/genre';
import { GenreService } from 'src/app/Services/genre.service';

@Component({
  selector: 'app-index-genre',
  templateUrl: './index-genre.component.html',
  styleUrls: ['./index-genre.component.css']
})
export class IndexGenreComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  genresDTO: GenreDTO[] = [];
  displayedColumns:string[] = ['id','Name','Actions']
  ngOnInit(): void {
    this.genreService.GetAllGenres().subscribe(genres => {
      this.genresDTO = genres;
    }, error => {
      console.error(error)
    });

  }

}
