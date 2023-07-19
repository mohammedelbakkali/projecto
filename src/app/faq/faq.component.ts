import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
//import { ScrollSpyModule } from 'ngx-scrollspy';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,MatExpansionModule,MatIconModule,MatButtonModule/** ,ScrollSpyModule*/],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
    @ViewChild('#listFaq')
  listFaqRef!: ElementRef;
    @ViewChild('target1')
  target1Ref!: ElementRef;
    @ViewChild('target2')
  target2Ref!: ElementRef;
    @ViewChild('target3') target3Ref!: ElementRef;
    @ViewChild('target4')
  target4Ref!: ElementRef;
  
    constructor(private scrollDispatcher: ScrollDispatcher) {}
  
    ngAfterViewInit(): void {
      this.scrollDispatcher.scrolled().subscribe(() => {
        this.updateActiveItem();
      });
    }
  
    scrollTo(target: string) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    updateActiveItem() {
      const listFaqElement: HTMLElement = this.listFaqRef.nativeElement;
      const target1Element: HTMLElement = this.target1Ref.nativeElement;
      const target2Element: HTMLElement = this.target2Ref.nativeElement;
      const target3Element: HTMLElement = this.target3Ref.nativeElement;
      const target4Element: HTMLElement = this.target4Ref.nativeElement;
    
      const targetElements = [
        { id: 'target1', element: target1Element },
        { id: 'target2', element: target2Element },
        { id: 'target3', element: target3Element },
        { id: 'target4', element: target4Element },
      ];
    
      let activeTargetId = '';
      for (const target of targetElements) {
        const rect = target.element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          activeTargetId = target.id;
          console.log(activeTargetId);
          break; // Exit loop after finding the active target
        }
      }
    
      const listGroupItems: Element[] = Array.from(listFaqElement.getElementsByClassName('list-group-item'));
      for (const item of listGroupItems) {
        item.classList.remove('active');
      }
    
      const activeItem = listFaqElement.querySelector(`[href="#${activeTargetId}"]`);
      if (activeItem) {
        activeItem.classList.add('active');
      }
    }
    
  }
  






