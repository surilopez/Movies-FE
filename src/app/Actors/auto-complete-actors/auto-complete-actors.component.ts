import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

interface Actor {
  Name: string,
  Img: string,
  Character: string
}

@Component({
  selector: 'app-auto-complete-actors',
  templateUrl: './auto-complete-actors.component.html',
  styleUrls: ['./auto-complete-actors.component.css']
})




export class AutoCompleteActorsComponent implements OnInit {


  constructor() { }

  Controller: FormControl = new FormControl();
  Actores = [
    { Name: 'Dwayne Johnson', Character: '', Img: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg' },
    { Name: 'Tom Cruise', Character: '', Img: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg' },
    { Name: 'Leonardo Dicaprio', Character: '', Img: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg' },
    { Name: 'Jessica Alba', Character: '', Img: 'https://m.media-amazon.com/images/M/MV5BODYxNzE4OTk5Nl5BMl5BanBnXkFtZTcwODYyMDYzMw@@._V1_UY317_CR12,0,214,317_AL_.jpg' },
    { Name: 'Penelope Cruz', Character: '', Img: 'https://m.media-amazon.com/images/M/MV5BMTM0Mzc1MTc2OF5BMl5BanBnXkFtZTcwMzE4MzQxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg' }]


  AllActors = this.Actores
  selectedActors: Actor[] = [];
  ColumnsToShow = ['Img', 'Name', 'Character', 'Actions']

  @ViewChild(MatTable) table?: MatTable<any>



  ngOnInit(): void {
    this.Controller.valueChanges.subscribe(value => {
      this.Actores = this.AllActors;
      this.Actores = this.Actores.filter(actor => actor.Name.indexOf(value) != -1)

    })

  }


  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value)
    let actor = {
      Name: event.option.value.Name.toString(),
      Img: event.option.value.Img.toString(),
      Character: event.option.value.Character.toString()
    }
    this.selectedActors.push(actor)
    this.Controller.patchValue('')

    if (this.table != undefined) {
      this.table.renderRows();
    }
  }

  DeleteActorFromList(actor: Actor) {
    const index = this.selectedActors.findIndex(item => item.Name === actor.Name)
    this.selectedActors.splice(index, 1)
    this.table?.renderRows();
  }

  EndDrop(event: CdkDragDrop<any>) {
    const indexBefore = this.selectedActors.findIndex(
      actor => actor === event.item.data)
    moveItemInArray(this.selectedActors, indexBefore, event.currentIndex);
    this.table?.renderRows();
  }
}
