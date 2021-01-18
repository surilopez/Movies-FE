import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { UserDTO } from 'src/app/Models/security';
import { AuthorizedService } from 'src/app/Services/authorized.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-users',
  templateUrl: './index-users.component.html',
  styleUrls: ['./index-users.component.css']
})
export class IndexUsersComponent implements OnInit {

  constructor(private authorizedService: AuthorizedService) { }

  usersDTO: UserDTO[] = []
  displayedColumns: string[] = ['email', 'admin']
  TotalRecords: any
  ActualPage = 1;
  recordsToShow = 10;

  ngOnInit(): void {
    this.LoadRecord(this.ActualPage, this.recordsToShow)

  }

  LoadRecord(page: number, recordsToShow: number) {
    this.authorizedService.GetUserList(page, recordsToShow).subscribe((response: HttpResponse<UserDTO[]>) => {

      this.usersDTO = response.body!;
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

  AddRoleAdmin(userId: string) {
    this.authorizedService.AddRoleAdmin(userId).subscribe(() => {
      Swal.fire('Success', 'The user was added to Admin Group', 'success')
    })
  }

  RemoveRoleAdmin(userId: string) {
    this.authorizedService.RemoveRoleAdmin(userId).subscribe(() => {
      Swal.fire('Success', 'The user was removed from Admin Group', 'success')
    })
  }

}
