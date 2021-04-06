import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss']
})
export class InputLoginComponent implements OnInit {
 
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      funcional: ['', Validators.required],
      racf: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

      }
    }


