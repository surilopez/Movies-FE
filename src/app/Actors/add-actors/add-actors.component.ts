import { Component, OnInit } from '@angular/core';
import { ActorCreationDTO } from '../actor';

@Component({
  selector: 'app-add-actors',
  templateUrl: './add-actors.component.html',
  styleUrls: ['./add-actors.component.css']
})
export class AddActorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SaveChanges(actor: ActorCreationDTO) {
    console.log(actor)
  }

}
