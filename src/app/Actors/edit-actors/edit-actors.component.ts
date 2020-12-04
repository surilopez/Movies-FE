import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreationDTO } from '../actor';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  model: ActorCreationDTO = {
    Name: 'Robert de Niro',
    DateOfBirth: new Date()
  };
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

  SaveChanges(actor: ActorCreationDTO) {
    console.log(actor)

  }
}
