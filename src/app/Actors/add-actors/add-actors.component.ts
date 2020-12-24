import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorsService } from 'src/app/Services/actors.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';
import { ActorCreationDTO } from '../actor';

@Component({
  selector: 'app-add-actors',
  templateUrl: './add-actors.component.html',
  styleUrls: ['./add-actors.component.css']
})
export class AddActorsComponent implements OnInit {

  constructor(
    private actorsService: ActorsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  frmErrors: string[] = [];
  SaveChanges(actor: ActorCreationDTO) {
    this.actorsService.AddNewActor(actor)
      .subscribe(() => {
        this.router.navigate(['/Actors'])
      },errors=>this.frmErrors= ParseErrorsAPI(errors))
    console.log(actor)
  }

}
