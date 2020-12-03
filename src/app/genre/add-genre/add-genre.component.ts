import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstLetterCapital } from 'src/app/Utils/FirstLetterCapital';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            FirstLetterCapital()
          ]
        }],

    })
  }

  SaveNewGenre() {
    //Function for save Genre
    this.router.navigate(['/Genre']);
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
