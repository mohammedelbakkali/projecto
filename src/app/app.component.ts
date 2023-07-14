import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HedaerComponent } from './shared/hedaer/hedaer.component';
import { SideBarComponent } from "./shared/side-bar/side-bar.component";
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, HedaerComponent, FooterComponent, SideBarComponent, LoginRegisterComponent, DashboardComponent]
})
export class AppComponent {
  title = 'projecto';
}
