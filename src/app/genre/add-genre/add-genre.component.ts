import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstLetterCapital } from 'src/app/Utils/FirstLetterCapital';
import { GenreCreationDTO } from '../genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private router: Router,
    ) {

  }

  ngOnInit(): void {
  }
  SaveGenre(Genre: GenreCreationDTO ) {
    //Function for save Genre
    console.log(Genre)
    this.router.navigate(['/Genre']);
  }

}
