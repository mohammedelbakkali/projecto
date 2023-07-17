import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoryOfmodelComponent } from '../category-ofmodel/category-ofmodel.component';
@Component({
  selector: 'app-showpage',
  standalone: true,
  imports: [CommonModule,RouterLink,MatTabsModule,MatExpansionModule,MatInputModule,MatIconModule,ReactiveFormsModule,MatRadioModule,MatSelectModule,MatButtonModule],
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.scss']
})
export class ShowpageComponent {
  panelOpenState = false;
  mainImageUrl: String | undefined;
  imageUrls: string[] = ['../../assets/images/test.jpg', '../../assets/images/paragliding-in-pokhara.jpg', '../../assets/images/sos.png','../../assets/images/t1.jpg'];
  currentIndex: number = 0;

  private timer: any;

  displayImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
    this.currentIndex = this.imageUrls.indexOf(imageUrl);
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imageUrls.length - 1;
    }
    this.mainImageUrl = this.imageUrls[this.currentIndex];
  }

  nextImage() {
    if (this.currentIndex < this.imageUrls.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.mainImageUrl = this.imageUrls[this.currentIndex];
  }

 

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoSlide() {
    this.timer = setInterval(() => {
      this.nextImage();
    }, 5000);
  }













  ngOnInit() {
    // Set a default image URL here if needed
    this.mainImageUrl = '../../assets/images/paragliding_mountains_sport_parachute_paraglider_adventure_freedom_summer-571285.jpg';
    this.startAutoSlide();
  }
}
