import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { ChartsComponent } from "../../shared/charts/charts.component";
import { ChartsOfprojectsComponent } from '../contentOfProject/charts-ofprojects/charts-ofprojects.component';
import { InformationGeneralComponent } from "../contentOfProject/information-general/information-general.component";
import { EmployeesComponent } from "../contentOfProject/employees/employees.component";
import { TasksComponent } from "../gestions/activites/tasks/tasks.component";
import { HeaderOfDashboardComponent } from "../header-of-dashboard/header-of-dashboard.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-instance-ofproject',
    standalone: true,
    templateUrl: './instance-ofproject.component.html',
    styleUrls: ['./instance-ofproject.component.scss'],
    imports: [MatMenuModule,RouterOutlet,RouterLink,CommonModule,MatButtonModule ,MatTabsModule, MatIconModule, ChartsComponent, ChartsOfprojectsComponent, InformationGeneralComponent, EmployeesComponent, TasksComponent, HeaderOfDashboardComponent]
})
export class InstanceOfprojectComponent implements AfterViewInit{
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
