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

  @Input()
  NoSelectedGenres: SelectorMultiple[] = []

  SelectedGenres: SelectorMultiple[] = []

  @Input()
  NoSelectedTheaters: SelectorMultiple[] = []

  SelectedTheaters: SelectorMultiple[] = []

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
      Img: '',
      GenresId:'',
      TheatersId:''
    })

    if (this.model != undefined) {
      this.form.patchValue(this.model)
    }
  }

  KeepChanges() {
    const genresId = this.SelectedGenres.map(value=>value.key)
    const theatersId = this.SelectedTheaters.map(value=>value.key)
    this.form.get('GenresId')?.setValue(genresId);
    this.form.get('TheatersId')?.setValue(theatersId);
    this.NewMovieOnSubmit.emit(this.form.value)
  }

  uploadFile(file: File) {
    this.form.get('Img')?.setValue(file);
  }

  changeMarkDown(txt: string) {
    this.form.get('Info')?.setValue(txt);
  }

}
