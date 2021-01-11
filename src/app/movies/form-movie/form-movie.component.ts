import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorMovieDTO } from 'src/app/Actors/actor';
import { MovieCreationDTO, MovieDTO } from 'src/app/Models/movies';
import { SelectorMultiple } from 'src/app/Models/SelectorMultiple';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  @Input()
  model?: MovieDTO

  @Input()
  frmErrors: string[] = []

  @Output()
  NewMovieOnSubmit: EventEmitter<MovieCreationDTO> = new EventEmitter<MovieCreationDTO>()

  constructor(
    private formBuilder: FormBuilder
  ) { }
  form!: FormGroup;

  @Input()
  NoSelectedGenres: SelectorMultiple[] = []
  @Input()
  SelectedGenres: SelectorMultiple[] = []

  @Input()
  NoSelectedTheaters: SelectorMultiple[] = []
  @Input()
  SelectedTheaters: SelectorMultiple[] = []

  @Input()
  selectedActors: ActorMovieDTO[] = [];

  imgUpated = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        { validators: [Validators.required] }
      ],
      info: '',
      onTheater: false,
      trailer: '',
      releaseDate: '',
      Img: '',
      GenresId: '',
      TheatersId: '',
      Actors: ''
    })

    if (this.model != undefined) {

      this.form.patchValue(this.model)
    }
  }

  KeepChanges() {
    const genresId = this.SelectedGenres.map(value => value.key)
    this.form.get('GenresId')?.setValue(genresId);

    const theatersId = this.SelectedTheaters.map(value => value.key)
    this.form.get('TheatersId')?.setValue(theatersId);

    const actors = this.selectedActors.map(value => {
      return { id: value.id, character: value.character }
    });

    this.form.get('Actors')?.setValue(actors);
    if (!this.imgUpated) {
      this.form.patchValue({ 'Img': null });
    }


    this.NewMovieOnSubmit.emit(this.form.value)
  }

  uploadFile(file: File) {
    this.form.get('Img')?.setValue(file);
    this.imgUpated = true;
  }

  changeMarkDown(txt: string) {
    this.form.get('info')?.setValue(txt);
  }

}
