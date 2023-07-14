import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
export class DashboardComponent implements AfterViewInit{
    constructor(private elementRef: ElementRef) {}

  /**   @ViewChild('sideBarRef', { read: ElementRef }) sideBarRef: ElementRef | undefined;

    ngAfterViewInit() {
      const sideBarElement: HTMLElement = this.sideBarRef!.nativeElement;
      const width: number = sideBarElement.offsetWidth;
      console.log('Child component width:', width);
    }
   
*/
ngAfterViewInit() {
    const childElement: HTMLElement = this.elementRef.nativeElement.querySelector('#sideBarRef');
    const width: number = childElement.offsetWidth;
    console.log('Child component width:', width);
  }

}
