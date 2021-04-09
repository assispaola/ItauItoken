import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss'],
})
export class InputLoginComponent implements OnInit {
  submitted: boolean;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;

    this.registerForm = this.formBuilder.group({
      funcional: ['', Validators.required],
      racf: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
}
