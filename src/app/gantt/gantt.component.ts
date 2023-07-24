import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

// Declare the 'google' variable to avoid TypeScript errors
declare var google: any;

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  standalone:true,
})
export class GanttChartComponent implements AfterViewInit{
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