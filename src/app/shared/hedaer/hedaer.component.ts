import { Component, HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-hedaer',
    templateUrl: './hedaer.component.html',
    styleUrls: ['./hedaer.component.scss'],
    standalone: true,
    imports: [RouterLink, SideBarComponent]
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
