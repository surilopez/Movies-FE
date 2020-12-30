import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorsService } from 'src/app/Services/actors.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';
import { ActorCreationDTO, ActorDTO } from '../actor';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {



  model!: ActorDTO;

  frmErrors: string[] = [];

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private actorServices: ActorsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {

      this.actorServices.getActorById(params.id)
        .subscribe(actor => {
          console.log(actor)
          this.model = actor

        }, (error) => {
          console.log(error)
          this.router.navigate(['/Actors'])
        })
    })
  }
  SaveChanges(actor: ActorCreationDTO) {
    //Function for save Genre
    console.log(actor)
    if (this.model) {
      this.actorServices.EditActor(this.model.id, actor).subscribe(() => {
        this.router.navigate(['/Actors']);
      }, error => this.frmErrors = ParseErrorsAPI(error))
    }

  }
}
