import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GenreDTO } from 'src/app/Models/genre';
import { GenreService } from 'src/app/Services/genre.service';

@Component({
  selector: 'app-index-genre',
  templateUrl: './index-genre.component.html',
  styleUrls: ['./index-genre.component.css']
})
export class IndexGenreComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  genresDTO: GenreDTO[] = []
  displayedColumns: string[] = ['id', 'Name', 'Actions']
  TotalRecords: any
  ActualPage = 1;
  recordsToShow = 10;


  ngOnInit(): void {
    this.LoadRecord(this.ActualPage, this.recordsToShow)

  }

  LoadRecord(page: number, recordsToShow: number) {
    this.genreService.GetAllGenres(page, recordsToShow).subscribe((response: HttpResponse<GenreDTO[]>) => {

      this.genresDTO = response.body!;
      console.log(response.headers.get("TotalRecords"))
      this.TotalRecords = response.headers.get("TotalRecords")!
    }, error => {
      console.error(error)
    });
  }

  UpdatePagination(data: PageEvent) {
    this.ActualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.LoadRecord(this.ActualPage,this.recordsToShow);
  }

}
