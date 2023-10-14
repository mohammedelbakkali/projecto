import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

// interface Breadcrumbs {
//     label:string;
//     url:string
// }

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  breadcrumbs:Array<{label:string,url:string}> = [];

 
   constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.generateBreadcrumbs(this.router.routerState.root);
    });
  }

  generateBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): void {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      this.generateBreadcrumbs(child, url, breadcrumbs);
    }

    this.breadcrumbs = breadcrumbs;
  }
  
  //  a:any = {
  //     label:"",
  //     url:""
  //  }

  // addBreadcrumb(label:string, url:string){
  //     this.a= {
  //       label:label,
  //       url:url
  //     }
  //    this.breadCrumbs.push(this.a) 
     
  // }

  // removeLastBreadcrumb() {
  //   this.breadCrumbs.pop();
  // }

  // getBreadCrumbs(){
  //    return this.breadCrumbs;
  // }

}
