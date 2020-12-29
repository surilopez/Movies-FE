import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActorsService } from 'src/app/Services/actors.service';
import { ActorDTO } from '../actor';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  constructor(
    private actorsService : ActorsService
  ) { }

  actorsDTO: ActorDTO[] = []
  displayedColumns: string[] = ['id', 'Name', 'Actions']
  TotalRecords: any
  ActualPage = 1;
  recordsToShow = 10;


  ngOnInit(): void {
    this.LoadRecord(this.ActualPage, this.recordsToShow)

  }

  LoadRecord(page: number, recordsToShow: number) {
    this.actorsService.GetAllActors(page, recordsToShow).subscribe((response: HttpResponse<ActorDTO[]>) => {

      this.actorsDTO = response.body!;
      console.log(response.headers.get("TotalRecords"))
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
    this.actorsService.deleteActorByID(id)
      .subscribe(() => {
        this.LoadRecord(this.ActualPage, this.recordsToShow)
      },error =>{
        console.error(error)
      })
  }

}
