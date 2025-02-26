import { NgFor } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [NgFor],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  rating = input(0, { transform: roundRate });

  // we can use this for dynamic number of stars
  // @Input() totalStars: number = 5;

  get stars(): any[] {
    // we can use this for dynamic number of stars
    // return Array(totalStars).fill(0);
    return Array(5).fill(0);
  }
}

function roundRate(r: number): number {
  return Math.round(r) ?? 0;
}
