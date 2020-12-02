import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

}
