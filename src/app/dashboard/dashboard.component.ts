import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { CardComponent } from "../card/card.component";
import { MiniProjectCardComponent } from "./mini-project-card/mini-project-card.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [CommonModule, CardComponent, MiniProjectCardComponent,MatIconModule,MatButtonModule,SideBarComponent]
})
export class DashboardComponent{
sidebarVisible = false;
 /**    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.modifyMargin();
    }
    modifyMargin() {
        const element: HTMLElement = this.elementRef.nativeElement;
        this.renderer.setStyle(element, 'margin-left', '250px');
      }
      @ViewChild('sideBarRef', { read: ElementRef }) sideBarRef: ElementRef | undefined;
width: any;
    ngAfterViewInit() {
      const sideBarElement: HTMLElement = this.sideBarRef!.nativeElement;
    const width: number = sideBarElement.offsetWidth;
      console.log('Child component width:', width);

      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          if (entry.target === sideBarElement) {
            this.width = entry.contentRect.width;
            console.log('Child component width:', this.width);
          }
        }
      });
  
      resizeObserver.observe(sideBarElement);
    }
   
*/

}
