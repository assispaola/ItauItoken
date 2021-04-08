import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonModule } from 'src/app/ui/button/button.module';
import { InputLoginComponent } from './input-login.component';

@NgModule({
  declarations: [InputLoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    ButtonModule,
  ],

  exports: [InputLoginComponent],
})
export class InputLoginModule {}
