import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { CardComponent } from "../card/card.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsComponent } from "../shared/charts/charts.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { GanttChartComponent } from "../gantt/gantt.component";
import {MatTabsModule} from '@angular/material/tabs';
import { SideOfDashboardComponent } from "./side-of-dashboard/side-of-dashboard.component";
import { HeaderOfDashboardComponent } from "./header-of-dashboard/header-of-dashboard.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [RouterOutlet, MatTabsModule, CommonModule, CardComponent, MatIconModule, MatButtonModule, SideBarComponent, ChartsComponent, RouterLink, GanttChartComponent, SideOfDashboardComponent, HeaderOfDashboardComponent]
})
export class DashboardComponent  implements AfterViewInit {


  obj:any[]=[
    {
      label:"test1",
      icone:"icone for test1",
      url:"http://"
   },{
    label:"test2",
    icone:"icone for test2",
    url:"http://"
 },{
  label:"test2",
  icone:"icone for test2",
  url:"http://"
}
  ]

  constructor(private elementRef: ElementRef) {
    

  
  }



  ngAfterViewInit(): void {
    const arrowElements = this.elementRef.nativeElement.querySelectorAll('.arrow');
    
    for (let i = 0; i < arrowElements.length; i++) {
      arrowElements[i].addEventListener('click', (e:any) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    }
    
    const sidebarBtn = this.elementRef.nativeElement.querySelector('.bx-menu');
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    
    sidebar.classList.remove('close'); // Ensure that the sidebar does not have the 'close' class initially
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });
  }
}
   
