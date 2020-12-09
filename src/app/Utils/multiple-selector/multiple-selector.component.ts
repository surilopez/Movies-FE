import { Component, Input, OnInit } from '@angular/core';
import { SelectorMultiple } from 'src/app/Models/SelectorMultiple';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  @Input()
  Selected: SelectorMultiple[] = []

  @Input()
  NoSelected: SelectorMultiple[] = []

  constructor() { }

  ngOnInit(): void {
  }

  SelecteItem(item: SelectorMultiple, index: number) {
    this.Selected.push(item);
    this.NoSelected.splice(index, 1);
  }
  UnSelecteItem(item: SelectorMultiple, index: number) {
    this.NoSelected.push(item);
    this.Selected.splice(index, 1);
  }
  SelectAll() {
    this.Selected.push(...this.NoSelected);
    this.NoSelected = [];
  }
  UnSelectAll() {
    this.NoSelected.push(...this.Selected);
    this.Selected = [];
  }
}
