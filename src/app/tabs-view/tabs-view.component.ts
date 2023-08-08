import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs-view',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.scss']
})
export class TabsViewComponent {
    tab1:boolean = true;
    tab2:boolean = false;
    tab3:boolean = false;

    


    changeDisplayTotab1(){
       this.tab1 = true;
       this.tab2 = false;
       this.tab3 = false;

    }

    changeDisplayTotab2(){
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
  }

  changeDisplayTotab3(){
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = true;
}

changeDisplayTotab4(event:any){
    console.log(event)
} 

}
