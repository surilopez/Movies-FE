import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  SaveNewGenre() {
    //Function for save Genre
    this.router.navigate(['/Genre']);

  }
}
