import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeInputModule } from 'angular-code-input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-reset-password',
  standalone: true,
  imports: [CommonModule,CodeInputModule,MatButtonModule],
  templateUrl: './confirmation-reset-password.component.html',
  styleUrls: ['./confirmation-reset-password.component.scss']
})
export class ConfirmationResetPasswordComponent {

  constructor(private router:Router){}
  // this called every time when user changed the code
  onCodeChanged(code: string) {
  }
  
  // this called only if user entered full code
  onCodeCompleted(code: string) {
  }

  verifyCode(){
    this.router.navigate(['/change-password'])
  }
}
