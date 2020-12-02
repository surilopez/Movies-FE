import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

}
