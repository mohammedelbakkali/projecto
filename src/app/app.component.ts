import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { CategoryComponent } from "./category/category.component";
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HedaerComponent } from './shared/hedaer/hedaer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet,MatIconModule, ToolbarComponent, CategoryComponent, HedaerComponent, FooterComponent]
})
export class AppComponent {
  title = 'projecto';
}
