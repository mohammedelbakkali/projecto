import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './Kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanDIagrammeComponent implements AfterViewInit {
  @ViewChild('todoLane') todoLaneRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const draggables = document.querySelectorAll(".task");
    const droppables = document.querySelectorAll(".swim-lane");

    draggables.forEach((task) => {
      task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
      });
      task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
      });
    });

    droppables.forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = this.insertAboveTask(zone, (e as DragEvent).clientY);
        const curTask = document.querySelector(".is-dragging");

        if (curTask && !curTask.isEqualNode(bottomTask)) {
          if (!bottomTask) {
            zone.appendChild(curTask);
          } else {
            zone.insertBefore(curTask, bottomTask);
          }
        }
      });
    });
  }

  insertAboveTask(zone: Element, mouseY: number) {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
      const { top } = task.getBoundingClientRect();

      const offset = mouseY - top;

      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = task;
      }
    });

    return closestTask;
  }

  onFormSubmit() {
    const input = document.getElementById("todo-input") as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    const todoLane = this.todoLaneRef.nativeElement;
    const newTask = this.renderer.createElement('p');
    this.renderer.addClass(newTask, 'task');
    this.renderer.setAttribute(newTask, 'draggable', 'true');
    newTask.innerText = value;

    newTask.addEventListener("dragstart", () => {
      newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
      newTask.classList.remove("is-dragging");
    });

    this.renderer.setAttribute(newTask, '_ngcontent-ng-c2036402501', ''); // Add the attribute

    this.renderer.appendChild(todoLane, newTask);

    input.value = "";
  }
}