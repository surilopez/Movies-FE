import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterCreationDTO, TheaterDTO } from '../theater';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  model: TheaterDTO = {
    Name: 'The Grand IMAX Winstom Salem',
    Latitude: 36.17417482491187,
    Longitude: -80.27356982231142
  }

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      // alert(params.id)
    })
  }
  SaveChanges(theater: TheaterCreationDTO) {
    console.log(theater)
  }
}
