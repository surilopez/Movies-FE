import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TheaterCreationDTO } from '../theater';
import { Coordinates } from '../../Utils/maps/position'

@Component({
  selector: 'app-form-theater',
  templateUrl: './form-theater.component.html',
  styleUrls: ['./form-theater.component.css']
})
export class FormTheaterComponent implements OnInit {

  @Input()
  frmErrors:string[] = [];

  @Input()
  model?: TheaterCreationDTO

  @Output()
  SaveChanges: EventEmitter<TheaterCreationDTO> = new EventEmitter<TheaterCreationDTO>()

  constructor(
    private formBuilder: FormBuilder
  ) { }

  InitPosition: Coordinates[] = [];

  formTheaters!: FormGroup
  ngOnInit(): void {
    this.formTheaters = this.formBuilder.group({
      Name: ['', {
        validators: [Validators.required]
      }],
      Latitude: ['',
        {
          validators: [Validators.required]
        }],
      Longitude: ['',
        {
          validators: [Validators.required]
        }]
    })

    if (this.model !== undefined) {
      this.formTheaters.patchValue(this.model)
      this.InitPosition.push({Latitude:this.model.Latitude, Longitude:this.model.Longitude})
    }

  }

  onSubmit() {
    this.SaveChanges.emit(this.formTheaters.value)
  }

  coordinateThetaer(coord: Coordinates) {
    this.formTheaters.patchValue(coord)

  }

}
