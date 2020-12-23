import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/Services/genre.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';
import { GenreCreationDTO, GenreDTO } from '../../Models/genre';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  model?: GenreDTO = undefined
  frmErrors: string[] = [];
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private genreServices: GenreService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {

      this.genreServices.getGenreById(params.id)
        .subscribe(genre => {

          this.model = genre

        }, (error) => {
          console.log(error)
          this.router.navigate(['/Genre'])
        })
    })
  }
  SaveGenre(Genre: GenreCreationDTO) {
    //Function for save Genre
    if (this.model) {
      this.genreServices.editGenre(this.model.id, Genre).subscribe(() => {

        console.log(Genre)
        this.router.navigate(['/Genre']);
      }, error => this.frmErrors = ParseErrorsAPI(error))
    }

  }
}
