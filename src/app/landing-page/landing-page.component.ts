import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { CategoryOfmodelComponent } from '../category-ofmodel/category-ofmodel.component';


export interface Vegetable {
    name: string;
  }
  
@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: true,

    imports: [MatChipsModule, CdkDropList, NgFor, CdkDrag,MatMenuModule,CategoryOfmodelComponent]

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
