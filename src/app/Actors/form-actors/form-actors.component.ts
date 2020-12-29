import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actor';

@Component({
  selector: 'app-form-actors',
  templateUrl: './form-actors.component.html',
  styleUrls: ['./form-actors.component.css']
})
export class FormActorsComponent implements OnInit {

  @Input()
  model?: ActorDTO;

  @Input()
  frmErrors: string[] = []

  @Output()
  submit: EventEmitter<ActorCreationDTO> = new EventEmitter<ActorCreationDTO>()
  constructor(
    private formbuilder: FormBuilder
  ) { }

  formAddActor!: FormGroup
  changeImage= false
  ngOnInit(): void {
    this.formAddActor = this.formbuilder.group({
      name: ['', {
        validators: [Validators.required],
      }],
      dateOfBirth: '',
      actorImage: '',
      biography: ''
    })

    if (this.model != undefined) {
      console.log(this.model)
      this.formAddActor.patchValue(this.model)
    }

  }

  uploadFile(file: File) {

    this.changeImage = true;

    this.formAddActor.get('ActorImage')?.setValue(file);
  }

  changeMarkDown(txt: string) {
    this.formAddActor.get('Biography')?.setValue(txt);
  }

  onSubmit() {

    if (!this.changeImage) {
      this.formAddActor.patchValue({ 'ActorImage': null })
    }

    this.submit.emit(this.formAddActor.value)
  }

}
