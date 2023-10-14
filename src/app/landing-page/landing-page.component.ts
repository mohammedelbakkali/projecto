import { Component, Input, OnInit } from '@angular/core';

import { CardComponent } from "../card/card.component";

import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { CategoryOfmodelComponent } from '../category-ofmodel/category-ofmodel.component';
import { HedaerComponent, MenuItem } from "../shared/hedaer/hedaer.component";
import { BreadcrumbService } from '../services/breadcrumb.service';


export interface Vegetable {
    name: string;
  }
  
@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: true,
    imports: [MatChipsModule, CdkDropList, NgFor, CdkDrag, MatMenuModule, CategoryOfmodelComponent, HedaerComponent]
})
export class LandingPageComponent implements OnInit {
  @Input() menuContentHeader :MenuItem[];

  constructor(private breadCrumbs:BreadcrumbService){}
 
   

  ngOnInit(): void {
    // this.breadCrumbs.removeLastBreadcrumb();
    // this.breadCrumbs.addBreadcrumb("Home","/")
    // console.log(this.breadCrumbs.getBreadCrumbs())
    this.menuContentHeader = [
           {
            label:"Home",
            link:"/"
           },{
             label:"Browse Projects",
             link:"/"
           },{
            label:"Dashboard",
            link:"/dash"
          },
           
           {
            label:"About",
            link:"/",
            subMenu: [
               {
                label:"Enterprise",
                link:"/",
               },
               {
                label:"Membership",
                link:"/",
               },
               {
                label:"Preferred Projecto Program",
                link:"/",
               }
            ]
           }
    ]
  }
 
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
