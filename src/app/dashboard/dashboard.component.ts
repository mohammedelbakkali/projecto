import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { CardComponent } from "../card/card.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsComponent } from "../shared/charts/charts.component";
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [RouterOutlet,CommonModule, CardComponent, MatIconModule, MatButtonModule, SideBarComponent, ChartsComponent]
})
export class DashboardComponent{
    
}
