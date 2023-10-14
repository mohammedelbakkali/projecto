import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from "../../charts/pie/pie.component";
import { TimelineChartComponent } from "../../charts/timeline-chart/timeline-chart.component";
import {MatCardModule} from '@angular/material/card';
import { ColumnChartComponent } from "../../charts/column-chart/column-chart.component";
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { MatDividerModule } from '@angular/material/divider';
import { RadialBarComponent } from 'src/app/charts/radial-bar/radial-bar.component';


import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TimeLineVertivalComponent } from "../../charts/time-line-vertival/time-line-vertival.component";

@Component({
    selector: 'app-dh',
    standalone: true,
    templateUrl: './dh.component.html',
    styleUrls: ['./dh.component.scss'],
    imports: [MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule, CommonModule, MatSelectModule, MatDividerModule, RadialBarComponent, PieComponent, TimelineChartComponent, MatCardModule, ColumnChartComponent, TimeLineVertivalComponent]
})
export class DhComponent implements OnInit , AfterViewInit  {

 constructor(private breadCrumbs:BreadcrumbService){}

 date = new FormControl(new Date());
 serializedDate = new FormControl(new Date().toISOString());

tableOfBreadCrumbs:any;

@ViewChild('elmleft') elmleft!:ElementRef;
@ViewChild('elmright') elmright!:ElementRef;
@ViewChild('elmPie') elmPie!:ElementRef;
@ViewChild('elmcolumChart') elmcolumChart!:ElementRef;


    ngAfterViewInit(): void {
        // this.elmleft.nativeElement.classList.replace("col-lg-1","col-lg-0");
        // this.elmright.nativeElement.classList.replace("col-lg-1","col-lg-0");
     
      
        // this.elmcolumChart.nativeElement.classList.replace("col-lg-6","col-lg-6");
      
    }

    changeDisplayOfCHartsColumVirtical(){
        this.elmcolumChart.nativeElement.classList.replace("col-lg-6","col-lg-10");
        this.elmPie.nativeElement.classList.replace("col-lg-6","col-lg-10");
    }
    changeDisplayOfCHartsColumHorizontal(){
        this.elmcolumChart.nativeElement.classList.replace("col-lg-10","col-lg-6");
        this.elmPie.nativeElement.classList.replace("col-lg-10","col-lg-6");
    }

    changeDisplayOfCHartsPieVirtical(){
        
    }
    changeDisplayOfCHartsPieHorizontal(){
        this.elmPie.nativeElement.classList.replace("col-lg-10","col-lg-6");
    }


 ngOnInit(): void {
    //   this.breadCrumbs.addBreadcrumb("Dashboard","/dash")
   
     
}




}
