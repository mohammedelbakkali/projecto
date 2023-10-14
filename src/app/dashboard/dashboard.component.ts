import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { CardComponent } from "../card/card.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsComponent } from "../shared/charts/charts.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItem, HedaerComponent } from '../shared/hedaer/hedaer.component';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [MatMenuModule, MatIconModule, RouterOutlet, CommonModule, CardComponent, MatButtonModule, SideBarComponent, ChartsComponent, RouterLink , HedaerComponent]
})
export class DashboardComponent {
  constructor(public breadcrumbService:BreadcrumbService, private router: Router ){}

  @Input() menuContentHeader :MenuItem[];
  tableOfBreadCrumbs:any;
  
  ngOnInit(): void {
    this.breadcrumbService.generateBreadcrumbs(this.router.routerState.root);
    // this.tableOfBreadCrumbs=this.breadCrumbs.getBreadCrumbs();
    this.menuContentHeader = [

            {
              label:"Dashboard",
              link:"/dash"
            },
           {
            label:"Browse Projects",
            link:"/"
           },{
             label:"Mes projets",
             link:"/dash/projects"
           },
           {
            label:"Orders",
            link:"/",
         },

         {
           label:'Analytics',
           link:"#",
           subMenu:[
              {label:"overview",link:"#"},
              {label:"overview",link:"#"},
           ]
         },
           
           
           {
            label:"support",
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
            ],
           
           }
    ]
  }


}
   
