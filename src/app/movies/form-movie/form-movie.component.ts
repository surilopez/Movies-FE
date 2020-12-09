import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCreationDTO, MovieDTO } from 'src/app/Models/movies';
import { SelectorMultiple } from 'src/app/Models/SelectorMultiple';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  @Input()
  model: MovieDTO = {
    Title: '',
    Trailer: '',
    Info: '',
    onTheater: false,
    ReleaseDate: new Date(),
    Img: ''

  };

  @Output()
  NewMovieOnSubmit: EventEmitter<MovieCreationDTO> = new EventEmitter<MovieCreationDTO>()

  constructor(
    private formBuilder: FormBuilder
  ) { }
  form!: FormGroup;
  NoSelectedGenres: SelectorMultiple[] = [
    { key: 0, value: "All Genres" },
    { key: 1, value: "Comedy" },
    { key: 2, value: "Adventure" },
    { key: 3, value: "Romantic" },
    { key: 4, value: "Dramas" },
    { key: 5, value: "Action" },
  ]

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Title: [
        '',
        { validators: [Validators.required] }
      ],
      Info: '',
      onTheater: false,
      Trailer: '',
      ReleaseDate: '',
      Img: ''
    })

    if (this.model != undefined) {
      this.form.patchValue(this.model)
    }
  }

  KeepChanges() {
    this.NewMovieOnSubmit.emit(this.form.value)
  }

  uploadFile(file: File) {
    this.form.get('Img')?.setValue(file);
  }

  changeMarkDown(txt: string) {
    this.form.get('Info')?.setValue(txt);
  }

}
