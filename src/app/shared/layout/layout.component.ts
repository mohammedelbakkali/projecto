import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedaerComponent } from "../hedaer/hedaer.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [CommonModule, HedaerComponent, FooterComponent, RouterOutlet]
})
export class LayoutComponent {
  
}
