import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatIconModule,MatButtonModule,MdbCarouselModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  favorite: String="favorite_border";
  

  liked=false;

  changeState(){
    this.liked=!this.liked;
  }

}





