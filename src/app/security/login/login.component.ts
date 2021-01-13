import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsUser } from 'src/app/Models/security';
import { AuthorizedService } from 'src/app/Services/authorized.service';
import { ParseErrorsAPI } from 'src/app/Utils/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authorizedService: AuthorizedService,
    private router:Router
  ) { }
  frmErrors: string[] = []
  ngOnInit(): void {
  }


  Login(credential: CredentialsUser) {
    this.authorizedService.Login(credential)
      .subscribe(response => {
        console.log(response)
        this.authorizedService.StorageToken(response);
        this.router.navigate(['/'])
      },errors=>{
        this.frmErrors= ParseErrorsAPI(errors)
      })
  }
}
