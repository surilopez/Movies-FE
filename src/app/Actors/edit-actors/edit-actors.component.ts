import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreationDTO, ActorDTO } from '../actor';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  model: ActorDTO = {
    Name: 'Robert de Niro',
    DateOfBirth: new Date(),
    ActorImage:'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg'

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
