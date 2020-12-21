import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreService } from 'src/app/Services/genre.service';
import { FirstLetterCapital } from 'src/app/Utils/FirstLetterCapital';
import { GenreCreationDTO } from '../../Models/genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private router: Router,
    private genreService: GenreService
  ) {

  }

  ngOnInit(): void {
  }
  SaveGenre(genre: GenreCreationDTO) {
    this.genreService.AddNewGenre(genre).subscribe(() => {
      this.router.navigate(['/Genre']);
    },error=>{
      console.error(error)
    })

  }

}
