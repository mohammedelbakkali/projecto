import { Component } from '@angular/core';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [SideBarComponent]
})
export class DashboardComponent {

}
