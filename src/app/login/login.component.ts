import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [FormBuilder],
  imports: [MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatFormFieldModule,MatLabel,ReactiveFormsModule],
})
export class LoginComponent {
  private fb:FormBuilder = inject(FormBuilder)
  constructor(){

  }
   loginForm = this.fb.group({
    id:['',[Validators.required,Validators.email]],
    password: ['', [Validators.required,]]
   })

   signIn() {
    const {id, password} = this.loginForm.value;
    if(id === 'admin@gmail.com' && password === '123'){
      alert('signed in')
    }
    console.log('zzz loginform',this.loginForm)
   }
}
