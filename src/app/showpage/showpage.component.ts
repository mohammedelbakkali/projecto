import { Component, HostListener } from '@angular/core';
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

export interface Projecto{
  titel_project : string ;
  short_description : string;
  nbr_rate:number;
  creator :string;
  last_update : string;
  language :string;
  sub_titels : string [] ;    
  image_src:string;
  prjt_hdrs: string [];
  description: string;
  ppl_targeted: string [] ;
}


@Component({
  selector: 'app-showpage',
  standalone: true,
  imports: [CommonModule,RouterLink,MatTabsModule,MatExpansionModule,MatInputModule,MatIconModule,ReactiveFormsModule,MatRadioModule,MatSelectModule,MatButtonModule],
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.scss'],
})
export class ShowpageComponent {
  panelOpenState = false;
  mainImageUrl: String | undefined;
  imageUrls: string[] = ['../../assets/images/test.jpg', '../../assets/images/paragliding-in-pokhara.jpg', '../../assets/images/sos.png','../../assets/images/t1.jpg'];
  currentIndex: number = 0;
  private timer: any;

 
  vide!: HTMLElement | null;



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
  
    @HostListener('window:scroll', [])
  onWindowScroll() {
  
    if ( this.vide) {
      const triggerOffset = this.vide.offsetTop; /* Offset from the top to trigger the change */

      if (window.scrollY >= triggerOffset) {
        this.vide.classList.add('.Mydive');
      } else {
        this.vide.classList.remove('.vide');
      }
    }
  }
  

  // to variabels



  

  proj !: Projecto ;

























  ngOnInit() {
    // Set a default image URL here if needed
    this.vide = document.querySelector('.vide') as HTMLElement;
    this.mainImageUrl = '../../assets/images/paragliding_mountains_sport_parachute_paraglider_adventure_freedom_summer-571285.jpg';
    this.startAutoSlide();

    this.proj ={
      titel_project :"Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
  short_description : "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
  nbr_rate :298.239 ,
  creator : "zakariae, Mouhsin, Mouhamed, Chihab",
  last_update :"7/23",
  language:"English",
  sub_titels : ['English ' , ' Arabic'],
  image_src : "../../assets/images/sos.png",
  prjt_hdrs : ["Automate tasks on their computer by writing simple Python programs","Programmatically generate and update Excel spreadsheets","Crawl web sites and pull information from online sources","Write programs that can do text pattern recognition with 'regular expressions'","Parse PDFs and Word documents","Write programs that send out email notifications","Programmatically control the mouse and keyboard to click and type for you."],

  description :"If you're an office worker, student, administrator, or just want to become more productive with your computer, programming will allow you write code that can automate tedious tasks. This course follows the popular (and free!) book, Automate the Boring Stuff with Python. Automate the Boring Stuff with Python was written for people who want to get up to speed writing small programs that do practical tasks as soon as possible. You don't need to know sorting algorithms or object-oriented programming, so this course skips all the computer science and concentrates on writing code that gets stuff done. This course is for complete beginners and covers the popular Python programming language. You'll learn basic concepts as well as:Web scrapingParsing PDFs and Excel spreadsheetsAutomating the keyboard and mouse Sending emails and texts And several other practical topics By the end of this course, you'll be able to write code that not only dramatically increases your productivity, but also be able to list this fun and creative skill on your resume.",

  ppl_targeted :['Office workers, students, small/home business workers, and administrators would want to improve their productivity.','Aspiring software engineers who want to add skills to their programming toolbelt.','Computer users who have heard the "learn to code" message, but want practical reasons to learn programming.','Experienced Python software engineers can skip the first half of the course, but may find the later parts that cover various third-party modules helpful.',"While this course doesn't cover specific devops tools, this course would be useful for QA, devops, and admins who want to learn scripting in Python"]

    }
  }






}
