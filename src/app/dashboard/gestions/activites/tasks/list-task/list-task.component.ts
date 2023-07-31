import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';

const ELEMENT_DATA = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Lithium'},
  {name: 'Beryllium'},
  {name: 'Boron'},
  {name: 'Carbon'},
  {name: 'Nitrogen'},
  {name: 'Oxygen'},
  {name: 'Fluorine'},
  {name: 'Neon'},
];

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule,MatRippleModule,MatTableModule,MatExpansionModule],
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {
  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;
  panelOpenState = false;
}
