import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mark-down-input',
  templateUrl: './mark-down-input.component.html',
  styleUrls: ['./mark-down-input.component.css']
})
export class MarkDownInputComponent implements OnInit {

  constructor() { }
  @Input()
  placeholderTextAre: string = 'Text'

  @Input()
  MarkDownContent = ''

  @Output()
  TextAreaChange: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
  }
  inputTextArea(event: Event) {
    // console.log((<HTMLInputElement>event.target).value)
    this.MarkDownContent = (<HTMLInputElement>event.target).value
    this.TextAreaChange.emit(this.MarkDownContent)
  }
}
