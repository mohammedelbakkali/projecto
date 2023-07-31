import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-of-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header-of-dashboard.component.html',
  styleUrls: ['./header-of-dashboard.component.scss']
})
export class HeaderOfDashboardComponent {

}
