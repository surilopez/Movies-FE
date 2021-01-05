import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GenreDTO } from 'src/app/Models/genre';
import { TheaterService } from 'src/app/Services/theater.service';
import { TheaterDTO } from '../theater';

@Component({
  selector: 'app-index-theater',
  templateUrl: './index-theater.component.html',
  styleUrls: ['./index-theater.component.css']
})
export class IndexTheaterComponent implements OnInit {


  constructor(private theaterService: TheaterService) { }

  theaterDTO: TheaterDTO[] = []
  displayedColumns: string[] = ['id', 'Name', 'Actions']
  TotalRecords: any
  ActualPage = 1;
  recordsToShow = 10;


  ngOnInit(): void {
    this.LoadRecord(this.ActualPage, this.recordsToShow)

  }

  LoadRecord(page: number, recordsToShow: number) {
    this.theaterService.GetAllTheaters(page, recordsToShow).subscribe((response: HttpResponse<TheaterDTO[]>) => {

      this.theaterDTO = response.body!;

      this.TotalRecords = response.headers.get("TotalRecords")!
    }, error => {
      console.error(error)
    });
  }

  UpdatePagination(data: PageEvent) {
    this.ActualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.LoadRecord(this.ActualPage, this.recordsToShow);
  }

  deleteGenre(id: number) {
    this.theaterService.deleteTheaterByID(id)
      .subscribe(() => {
        this.LoadRecord(this.ActualPage, this.recordsToShow)
      },error =>{
        console.error(error)
      })
  }

}
