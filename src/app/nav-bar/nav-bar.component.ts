import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from '../Services/authorized.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public authorizedService: AuthorizedService
  ) { }

  ngOnInit(): void {
  }

}
