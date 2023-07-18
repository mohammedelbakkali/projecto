import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-info-compte',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatDialogModule],
  templateUrl: './dialog-info-compte.component.html',
  styleUrls: ['./dialog-info-compte.component.scss']
})
export class DialogInfoCompteComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(InfoTypeDeCompte);
  }
}

@Component({
  selector: 'info-type-de-compte',
  templateUrl: 'info-type-de-compte.html',
  standalone: true,
  imports: [MatDialogModule],
})
export class InfoTypeDeCompte {
  constructor() {}
}
