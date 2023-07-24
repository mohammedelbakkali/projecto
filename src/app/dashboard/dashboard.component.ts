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

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [RouterOutlet,MatTabsModule, CommonModule, CardComponent, MatIconModule, MatButtonModule, SideBarComponent, ChartsComponent, RouterLink, GanttChartComponent]
})
export class DashboardComponent  implements AfterViewInit{
    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
      const arrowElements = this.elementRef.nativeElement.querySelectorAll('.arrow');
  
      for (let i = 0; i < arrowElements.length; i++) {
        arrowElements[i].addEventListener('click', (e:any) => {
          const arrowParent = e.target.parentElement.parentElement;
          arrowParent.classList.toggle('showMenu');
        });
      }
  
      const sidebarBtn = this.elementRef.nativeElement.querySelector('.bx-menu');
      sidebarBtn.addEventListener('click', () => {
        const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
        sidebar.classList.toggle('close');
      });
    }
}
