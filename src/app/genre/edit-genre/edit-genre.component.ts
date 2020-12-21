import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreCreationDTO } from '../../Models/genre';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  model: GenreCreationDTO = {
    Name: 'Drama'
  }

  constructor(private activedRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }
  SaveGenre(Genre: GenreCreationDTO) {
    //Function for save Genre
    console.log(Genre)
    this.router.navigate(['/Genre']);
  }
}
