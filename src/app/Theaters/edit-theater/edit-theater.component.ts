import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheaterService } from 'src/app/Services/theater.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';
import { TheaterCreationDTO, TheaterDTO } from '../theater';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {


  model?: TheaterDTO = undefined
  frmErrors: string[] = [];
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private theaterServices: TheaterService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {

      this.theaterServices.getTheaterById(params.id)
        .subscribe(theater => {

          this.model = theater

        }, (error) => {
          console.log(error)
          this.router.navigate(['/Theater'])
        })
    })
  }
  SaveChanges(theater: TheaterCreationDTO) {
    //Function for save Genre
    if (this.model) {
      this.theaterServices.editTheater(this.model.id, theater).subscribe(() => {

        console.log(theater)
        this.router.navigate(['/Theater']);
      }, error => this.frmErrors = ParseErrorsAPI(error))
    }

  }
}
