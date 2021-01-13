import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialsUser } from 'src/app/Models/security';

@Component({
  selector: 'app-form-authentication',
  templateUrl: './form-authentication.component.html',
  styleUrls: ['./form-authentication.component.css']
})
export class FormAuthenticationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  authForm!: FormGroup

  @Input()
  frmErrors: string[] = []

  @Input()
  action!:string

  @Output()
  onSubmit: EventEmitter<CredentialsUser> = new EventEmitter<CredentialsUser>()

  ngOnInit(): void {

    this.authForm = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email]
        }],
      password: [
        '',
        {
          validators: [Validators.required]
        }]
    })
  }

  GetErrorEmail(){
    var field = this.authForm.get('email');
    if (field?.hasError('required')) {
      return 'Email is Required'
    }

    if (field?.hasError('email')) {
      return 'Email is not valid'
    }
    return ''
  }
}
