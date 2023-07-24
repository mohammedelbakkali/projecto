import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { ChartsComponent } from "../../shared/charts/charts.component";
import { ChartsOfprojectsComponent } from "../charts-ofprojects/charts-ofprojects.component";


@Component({
    selector: 'app-instance-ofproject',
    standalone: true,
    templateUrl: './instance-ofproject.component.html',
    styleUrls: ['./instance-ofproject.component.scss'],
    imports: [CommonModule, MatTabsModule, MatIconModule, ChartsComponent, ChartsOfprojectsComponent]
})
export class InstanceOfprojectComponent {

}
