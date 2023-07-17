import { Component, HostListener} from '@angular/core';
import { RouterLink, Router} from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-hedaer',
    templateUrl: './hedaer.component.html',
    styleUrls: ['./hedaer.component.scss'],
    standalone: true,
    imports: [RouterLink,NgIf]
})
export class HedaerComponent {
    isNavbarFixed!: boolean;

    constructor(private router: Router) {}

    @HostListener('window:scroll', ['$event']) onScroll() {
        if (window.scrollY > 100) {
          this.isNavbarFixed = true;
        } else {
          this.isNavbarFixed = false;
        }
      }

      isLoginRoute(): boolean {
        const currentRoute = this.router.url;
        return currentRoute === '/log';
      }

      isRegisterRoute(): boolean {
        const currentRoute = this.router.url;
        return currentRoute === '/reg';
      }

}
