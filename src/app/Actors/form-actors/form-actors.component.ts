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
  model!: ActorDTO;

  @Input()
  frmErrors: string[]=[]

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
      DateOfBirth: '',
      ActorImage: '',
      Biografy:''
    })
    if (this.model !== undefined) {
      this.formAddActor.patchValue(this.model)
    }

  }

  uploadFile(file: File) {
    this.formAddActor.get('ActorImage')?.setValue(file);
  }

  changeMarkDown(txt:string){
    this.formAddActor.get('Biografy')?.setValue(txt);
  }

  onSubmit() {
    this.submit.emit(this.formAddActor.value)
  }

}
