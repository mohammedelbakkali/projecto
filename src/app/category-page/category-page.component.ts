import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule,MatIconModule,CardComponent,MdbRangeModule,MdbAccordionModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
  cat ?: string|null
  selectedStars: number = 0;
  hoveredStar: number = 0;
  rangeValue: number = 0;

  onRangeInput(event: any) {
    this.rangeValue = event.target.value;
  }

  onStarHovered(starNumber: number) {
    this.hoveredStar = starNumber;
  }

  onStarUnhovered() {
    this.hoveredStar = 0;
  }

  onStarClicked(starNumber: number) {
    this.selectedStars = starNumber;
  }

  getStarIcon(starNumber: number): string {
    if (starNumber <= this.selectedStars) {
      return 'star';
    } else if (starNumber <= this.hoveredStar) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.cat = this.route.snapshot.paramMap.get('cat')
  }
}
