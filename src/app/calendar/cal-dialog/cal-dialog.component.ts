import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {  Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CalendarComponent, DialogData } from '../calendar.component';

@Component({
  selector: 'app-cal-dialog',
  standalone: true,
  imports: [MatDialogModule,MdbFormsModule, FormsModule,ReactiveFormsModule,CommonModule,MatExpansionModule,MatInputModule,MatIconModule,ReactiveFormsModule,MatRadioModule,MatSelectModule,MatButtonModule],
  templateUrl: './cal-dialog.component.html',
  styleUrls: ['./cal-dialog.component.scss']
})
export class CalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CalDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
