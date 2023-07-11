import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [CommonModule,MatSlideToggleModule,MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
 
  sidebarVisible = false;

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
