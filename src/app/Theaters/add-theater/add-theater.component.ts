import { Component, OnInit } from '@angular/core';
import { TheaterCreationDTO } from '../theater';

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})
export class AddTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SaveChanges(theater: TheaterCreationDTO) {
    console.log(theater)
  }
}
