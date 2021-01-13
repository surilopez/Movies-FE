import { Component, OnInit } from '@angular/core';
import { CredentialsUser } from 'src/app/Models/security';
import { AuthorizedService } from 'src/app/Services/authorized.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authorizedService: AuthorizedService
  ) { }

  frmErrors: string[] = []


  ngOnInit(): void {
  }


  Register(credential: CredentialsUser) {
    this.authorizedService.Register(credential)
      .subscribe(response => {
        console.log(response)
      },errors=>{
        this.frmErrors= ParseErrorsAPI(errors)
      })
  }
}
