import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  
  @Input()
  myForm!: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Form submission logic
      console.log(this.myForm.value);
    }
  }
}
