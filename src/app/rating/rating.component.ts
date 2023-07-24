import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  
   @Input() isReadOnly: boolean = false;
  @Input() totalRatings: number = 0;
  @Input() currentRating: number ; // Set the default rating to 3
  @Output() rated = new EventEmitter<number>();
  userSelectedRating: number = 0;

  updateRating(rating: number): void {
    if (!this.isReadOnly) {
      this.userSelectedRating = rating;
    }
  }

  submitRating(): void {
    if (!this.isReadOnly && this.userSelectedRating > 0) {
      this.totalRatings++;
      this.currentRating = this.calculateAverageRating(this.totalRatings, this.currentRating, this.userSelectedRating);
      this.rated.emit(this.userSelectedRating);
      this.userSelectedRating = 0; // Reset user selection
    }
  }

  private calculateAverageRating(totalRatings: number, currentRating: number, newRating: number): number {
    return (totalRatings * currentRating + newRating) / (totalRatings + 1);
  }


}
