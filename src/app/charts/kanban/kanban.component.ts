import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
// import { KanbanComponent } from 'smart-webcomponents-angular/kanban';

interface Task {
  name: string;
  color: string;
}

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule, MatMenuModule, MatIconModule,MatButtonModule, MatDialogModule],
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit{
  newTaskText: string = '';
  columnColors: string[] = [];
  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(EditTicketComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 nameOfcolumn:string = ''
 displayAddInput : boolean = false;


 displayAddInputFunction(columnIndex:any){
  this.columnIndex = columnIndex;
    this.displayAddInput=! this.displayAddInput;
     console.log(columnIndex);
   this.nameOfcolumn =   this.columns[columnIndex].name
 }

  columns = [
    { name: 'A faire', tasks:[ {name:"mohammed",color:"white"}] },
    { name: 'En cours', tasks: [] as Task[] },
    { name: 'Fini', tasks: [] as Task[]},
    {name: 'hello', tasks: [] as Task[] }
    // , {name: 'hello', tasks: [] as Task[] }
    // , {name: 'hello', tasks: [] as Task[] }
  ];
 

  ngOnInit(): void {
  }

  setColumnColor(columnIndex: number, color: string) {
    this.columnColors[columnIndex] = color;
    this.columns[columnIndex].tasks.forEach(task => {
      task.color = color;
    });
  }

  setTaskColor(columnIndex: number, taskIndex: number, color: string) {
    this.columns[columnIndex].tasks[taskIndex].color = color;
  }

  moveTask(task: Task, fromIndex: number, toIndex: number) {
    const fromColumn = this.columns[fromIndex];
    const toColumn = this.columns[toIndex];

    fromColumn.tasks = fromColumn.tasks.filter(t => t !== task);
    toColumn.tasks.push(task);
  }

  columnIndex: number = 0;
  color:string=""

  addTask() {

    this.displayAddInput=!this.displayAddInput;
    const columnName = this.columns[this.columnIndex].name;
    const newTask = this.newTaskText.trim();
    if (newTask) {
      this.columns[this.columnIndex].tasks.push({ name: newTask, color: this.columnColors[this.columnIndex] || this.color });
      this.newTaskText = ''; // Clear the input field
    }
  }

  deleteTask(columnIndex: number, taskIndex: number) {
    this.columns[columnIndex].tasks.splice(taskIndex, 1);
  }
}
