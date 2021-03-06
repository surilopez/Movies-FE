import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstLetterCapital } from 'src/app/Utils/FirstLetterCapital';
import { GenreCreationDTO, GenreDTO } from '../../Models/genre';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {
  public form!: FormGroup;

  @Input()
  frmErrors: string[] = [];

  @Input()
  modelToEdit?: GenreDTO

  @Output()
  onSubmit: EventEmitter<GenreCreationDTO> = new EventEmitter<GenreCreationDTO>();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
     name: ['',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            FirstLetterCapital()
          ]
        }],
        });

    if (this.modelToEdit !== undefined) {

      this.form.patchValue(this.modelToEdit);
    }
  }

  SaveGenre() {
    this.onSubmit.emit(this.form.value)
  }

  GetErrorFieldName() {
    var field = this.form.get('Name');

    if (field?.hasError('required')) {
      return 'The Name is REQUIRED'
    }
    if (field?.hasError('firstLetterCapital')) {
      //console.log(field.getError('firstLetterCapital').message)
      return field.getError('firstLetterCapital').message;
    }
    if (!field?.hasError('minLength')) {
      return 'The minimun Length is 3 Characters'
    }

    return '';
  }

}
