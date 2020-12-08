import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCreationDTO } from 'src/app/Models/movies';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  @Output()
  NewMovieOnSubmit: EventEmitter<MovieCreationDTO> = new EventEmitter<MovieCreationDTO>()

  constructor(
    private formBuilder: FormBuilder
  ) { }
  form!: FormGroup;
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
  }

  KeepChanges() {
    this.NewMovieOnSubmit.emit(this.form.value)
  }

  uploadFile(file: File) {
    this.form.get('Img')?.setValue(file);
  }

  changeMarkDown(txt:string){
    this.form.get('Info')?.setValue(txt);
  }

}
