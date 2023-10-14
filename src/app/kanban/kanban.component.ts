import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})

export class KanbanComponent implements AfterViewInit {
  tasks: string[] = ['Get groceries', 'Feed the dogs', 'Mow the lawn']; // Initial tasks array
  doingTasks: string[] = []; // Array for tasks in "Doing" lane
  doneTasks: string[] = []; // Array for tasks in "Done" lane
  currentItem: HTMLElement | null = null; // Reference to the currently dragged item

  @ViewChild('todoLane') todoLaneRef!: ElementRef;
  @ViewChild('doingLane') doingLaneRef!: ElementRef;
  @ViewChild('doneLane') doneLaneRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const todoLane = this.todoLaneRef.nativeElement;
    const doingLane = this.doingLaneRef.nativeElement;
    const doneLane = this.doneLaneRef.nativeElement;

    this.setupLane(todoLane);
    this.setupLane(doingLane);
    this.setupLane(doneLane);
  }

  setupLane(lane: HTMLElement) {
    lane.addEventListener('dragstart', (e: DragEvent) => {
      this.currentItem = e.target as HTMLElement;
      this.currentItem.classList.add('is-dragging');
      e.dataTransfer?.setData('text/plain', ''); // Needed for dragging to work in some browsers
    });

    lane.addEventListener('dragenter', (e: DragEvent) => {
      e.preventDefault();
      lane.classList.add('drag-over');
    });

    lane.addEventListener('dragleave', () => {
      lane.classList.remove('drag-over');
    });

    lane.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault();
    });

    lane.addEventListener('drop', (e: DragEvent) => {
      if (this.currentItem) {
        lane.appendChild(this.currentItem);
        lane.classList.remove('drag-over');
        this.currentItem.classList.remove('is-dragging');
        this.currentItem = null;
      }
    });
  }

  onFormSubmit() {
    const input = document.getElementById('todo-input') as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return false; // Return false to prevent form submission

    this.tasks.push(value);
    input.value = '';

    return false; // Return false to prevent form submission
  }
}