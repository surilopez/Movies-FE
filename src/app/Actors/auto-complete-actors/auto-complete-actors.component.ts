import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { ActorsService } from 'src/app/Services/actors.service';
import { ActorMovieDTO } from '../actor';

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


  constructor(private actorsService: ActorsService) { }

  Controller: FormControl = new FormControl();

  @Input()
  selectedActors: ActorMovieDTO[] = [];

  actorsToShow: ActorMovieDTO[] = [];

  ColumnsToShow = ['Img', 'Name', 'Character', 'Actions']

  @ViewChild(MatTable) table?: MatTable<any>



  ngOnInit(): void {
    this.Controller.valueChanges.subscribe(name => {
      this.actorsService.getActorByName(name).subscribe(actors => {
        this.actorsToShow = actors
      })

    })

  }


  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value)
    // let actor = {
    //   id: event.option.value.id.toString(),
    //   name: event.option.value.name.toString(),
    //   photo: event.option.value.photo.toString(),
    //   character: ""//event.option.value.character.toString()
    // }
    this.selectedActors.push(event.option.value)
    this.Controller.patchValue('')

    if (this.table != undefined) {
      this.table.renderRows();
    }
  }

  DeleteActorFromList(actor: Actor) {
    const index = this.selectedActors.findIndex(item => item.name === actor.Name)
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
