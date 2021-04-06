import { InputLoginComponent } from './input-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/ui/button/button.module';




@NgModule({
  declarations: [
    InputLoginComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule, 
    MatTabsModule, 
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    ButtonModule
  ],

  exports: [InputLoginComponent]
  
})
export class InputLoginModule { }
