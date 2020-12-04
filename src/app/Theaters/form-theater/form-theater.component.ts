import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TheaterCreationDTO } from '../theater';

@Component({
  selector: 'app-form-theater',
  templateUrl: './form-theater.component.html',
  styleUrls: ['./form-theater.component.css']
})
export class FormTheaterComponent implements OnInit {

  @Input()
  model?: TheaterCreationDTO

  @Output()
  SaveChanges: EventEmitter<TheaterCreationDTO> = new EventEmitter<TheaterCreationDTO>()

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formTheaters!: FormGroup
  ngOnInit(): void {
    this.formTheaters = this.formBuilder.group({
      Name: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined) {
      this.formTheaters.patchValue(this.model)
    }

  }

  onSubmit() {
    this.SaveChanges.emit(this.formTheaters.value)
  }

}
