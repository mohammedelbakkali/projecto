import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import {MatIconModule} from '@angular/material/icon';
import { CategoryOfmodelComponent } from '../category-ofmodel/category-ofmodel.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'filter-items',
  templateUrl: 'filter-items.html',
  styleUrls: ['./filter-items.scss'],
  standalone: true,
  imports: [MdbAccordionModule,MdbRangeModule,MatIconModule,MatDialogModule],
})
export class FilterItems {
  cat ?: string|null
  selectedStars: number = 0;
  hoveredStar: number = 0;
  rangeValue: number = 0;

 

  constructor() {
   
  }

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
}

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [MatDialogModule,FilterItems,CategoryOfmodelComponent,CommonModule,MatIconModule,CardComponent,MdbAccordionModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
  cat ?: string|null
  constructor(private route: ActivatedRoute,public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(FilterItems);
  }
  ngOnInit(): void {
    this.cat = this.route.snapshot.paramMap.get('cat')
  }
 
}
