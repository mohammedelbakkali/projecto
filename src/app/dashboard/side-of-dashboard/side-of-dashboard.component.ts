import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-of-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './side-of-dashboard.component.html',
  styleUrls: ['./side-of-dashboard.component.scss']
})
export class SideOfDashboardComponent implements AfterViewInit{

  @Input() 
  getData:any[]=[];


  
  constructor(private elementRef: ElementRef) {
    
    if(this.getData.length > 0){
        console.log("yes")
    }else{
        console.log("no")
    }
  
  }


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
      sidebar.classList.toggle('sidebar');
    });
  }
}
