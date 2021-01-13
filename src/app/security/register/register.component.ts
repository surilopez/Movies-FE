import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authorizedService: AuthorizedService,
    private router:Router
  ) { }

  frmErrors: string[] = []


  ngOnInit(): void {
  }


  Register(credential: CredentialsUser) {
    this.authorizedService.Register(credential)
      .subscribe(response => {
        console.log(response)
        this.authorizedService.StorageToken(response);
        this.router.navigate(['/'])
      },errors=>{
        this.frmErrors= ParseErrorsAPI(errors)
      })
  }
}
