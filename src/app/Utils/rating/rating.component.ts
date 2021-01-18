import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5
  @Input()
  selectedRating = 0

  @Output()
  rated: EventEmitter<number>= new EventEmitter<number>()

  maxRatingArray: number[] = []
  voted = false;
  oldRating = 0;

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0)
  }

  HandlingMouseEnter(index: number): void {
    this.selectedRating = index + 1;
  }

  HandlingMouseLeave() {


    if (this.selectedRating !== 0) {
      this.selectedRating = this.oldRating
    } else {
      this.selectedRating = 0;
    }

  }

  Rate(index: number): void {
    this.selectedRating = index + 1;
    this.voted = true;
    this.oldRating = this.selectedRating
    this.rated.emit(this.selectedRating)
  }

}
