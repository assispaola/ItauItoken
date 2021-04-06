
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputLoginModule } from './components/input-login/input-login.module';
import { ButtonModule } from 'src/app/ui/button/button.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  
  imports: [
    CommonModule,
    InputLoginModule,
    ButtonModule
  ],

  exports: [LoginComponent]
})
export class LoginModule { }
