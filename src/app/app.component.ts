import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HedaerComponent } from './shared/hedaer/hedaer.component';
import { SideBarComponent } from "./shared/side-bar/side-bar.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, HedaerComponent, FooterComponent, SideBarComponent]
})
export class AppComponent {
  title = 'projecto';
}
