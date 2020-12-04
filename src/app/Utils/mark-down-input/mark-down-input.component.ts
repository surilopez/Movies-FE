import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mark-down-input',
  templateUrl: './mark-down-input.component.html',
  styleUrls: ['./mark-down-input.component.css']
})
export class MarkDownInputComponent implements OnInit {

  constructor() { }

  MarkDownContent=''
  @Output()
  BiografyChange: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
  }
  inputTextArea(event: Event) {
   // console.log((<HTMLInputElement>event.target).value)
    this.MarkDownContent= (<HTMLInputElement>event.target).value
    this.BiografyChange.emit(this.MarkDownContent)
  }
}
