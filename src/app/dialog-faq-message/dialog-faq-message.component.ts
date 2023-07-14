import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-faq-message',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatDialogModule],
  templateUrl: './dialog-faq-message.component.html',
  styleUrls: ['./dialog-faq-message.component.scss']
})
export class DialogFaqMessageComponent {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(FaqMessageForm);
  }
}

@Component({
  selector: 'faq-message-form',
  templateUrl: 'faq-message-form.html',
  standalone: true,
  imports: [MatDialogModule],
})
export class FaqMessageForm {
  constructor() {}
}