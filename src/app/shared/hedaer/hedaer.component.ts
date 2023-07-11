import { Component, HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hedaer',
    templateUrl: './hedaer.component.html',
    styleUrls: ['./hedaer.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class HedaerComponent {
    isNavbarFixed!: boolean;
    @HostListener('window:scroll', ['$event']) onScroll() {
        if (window.scrollY > 100) {
          this.isNavbarFixed = true;
        } else {
          this.isNavbarFixed = false;
        }
      }

}
