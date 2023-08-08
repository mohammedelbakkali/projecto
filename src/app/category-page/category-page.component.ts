import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import {MatIconModule} from '@angular/material/icon';
import { CategoryOfmodelComponent } from '../category-ofmodel/category-ofmodel.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'filter-items',
  templateUrl: 'filter-items.html',
  styleUrls: ['./filter-items.scss'],
  standalone: true,
  imports: [MdbAccordionModule,MdbRangeModule,MatIconModule,MatDialogModule,MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule],
})
export class FilterItems {
  cat ?: string|null
  selectedStars: number = 0;
  hoveredStar: number = 0;
  rangeValue: number = 0;
  rangeMinValue: any = "300 $";
  rangeMaxValue: any = "400 $";

  
  @ViewChild(MatAccordion) accordion: MatAccordion;

 

  constructor() {
   
  }

  onRangeInput(event: any) {
    this.rangeValue = event.target.value;
  }

  onRangeMinInput(event: any) {
    this.rangeMinValue = event.target.value + " $";
  }

  onRangeMaxInput(event: any) {
    this.rangeMaxValue = event.target.value + " $";
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
    this.dialog.open(FilterItems,{
      autoFocus: false,
      maxHeight: '90vh'
    });
  }
  ngOnInit(): void {
    this.cat = this.route.snapshot.paramMap.get('cat')
  }
 
}
