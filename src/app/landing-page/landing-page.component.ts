import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";

import { CardComponent } from "../card/card.component";

import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';


export interface Vegetable {
    name: string;
  }
  
@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: true,
    imports: [CategoryComponent,CardComponent,MatChipsModule, CdkDropList, NgFor, CdkDrag,MatMenuModule]

})
export class LandingPageComponent {
    vegetables: Vegetable[] = [
        {name: 'apple'},
        {name: 'banana'},
        {name: 'strawberry'},
        {name: 'orange'},
        {name: 'kiwi'},
        {name: 'cherry'},
      ];
menu: any;
    
      drop(event: CdkDragDrop<Vegetable[]>) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
      }

    
}
