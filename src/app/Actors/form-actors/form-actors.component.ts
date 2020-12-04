import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO } from '../actor';

@Component({
  selector: 'app-form-actors',
  templateUrl: './form-actors.component.html',
  styleUrls: ['./form-actors.component.css']
})
export class FormActorsComponent implements OnInit {

  @Input()
  model!: ActorCreationDTO;

  @Output()
  submit: EventEmitter<ActorCreationDTO> = new EventEmitter<ActorCreationDTO>()
  constructor(
    private formbuilder: FormBuilder
  ) { }

  formAddActor!: FormGroup
  ngOnInit(): void {
    this.formAddActor = this.formbuilder.group({
      Name: ['', {
        validators: [Validators.required],
      }],
      DateOfBirth: ''
    })
    if (this.model !== undefined) {
      this.formAddActor.patchValue(this.model)
    }

  }

  onSubmit() {
    this.submit.emit(this.formAddActor.value)
  }

}
