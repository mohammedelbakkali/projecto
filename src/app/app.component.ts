import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HedaerComponent } from './shared/hedaer/hedaer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HedaerComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'projecto';
}
