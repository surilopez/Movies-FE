import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheaterService } from 'src/app/Services/theater.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';
import { TheaterCreationDTO } from '../theater';

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})
export class AddTheaterComponent implements OnInit {

  frmErrors: string[] = [];

  constructor(
  private router: Router,
  private theaterService: TheaterService
) {

}

ngOnInit(): void {
}



  SaveChanges(theater: TheaterCreationDTO) {
    console.log(theater)
    this.theaterService.AddNewTheater(theater).subscribe(() => {
      this.router.navigate(['/Theater']);
    },(error)=>{
      this.frmErrors = ParseErrorsAPI(error)
    })
  }
}
