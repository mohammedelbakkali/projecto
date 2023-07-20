import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cal-dialog-delete',
  standalone: true,
  imports: [CommonModule,MatDialogModule, MatButtonModule],
  templateUrl: './cal-dialog-delete.component.html',
  styleUrls: ['./cal-dialog-delete.component.scss']
})
export class CalDialogDeleteComponent {
  constructor(public dialogRef: MatDialogRef<CalDialogDeleteComponent> , @Inject(MAT_DIALOG_DATA) public data: any) {}
}
