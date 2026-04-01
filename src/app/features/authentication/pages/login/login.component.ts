import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { SignUpStore } from '../../store/sign-up.store';
import { AuthenticationStore } from '../../store/authentication.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatLabel,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);
  store = inject(AuthenticationStore);
  constructor(private router: Router) {}
  loginForm = this.fb.group({
    id: [
      '',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' },
    ],
    password: ['', { validators: [Validators.required], updateOn: 'blur' }],
  });

  signIn() {
    // const { id, password } = this.loginForm.value;
    // if (id === 'admin@gmail.com' && password === '123') {
    //   alert('signed in');
    // }
    this.store.setAuthentication(true);
    this.router.navigate(['/user/profile']);
  }

  signUp(): void {
    this.router.navigate(['/authentication/sign-up']);
  }

  forgetPassword(): void {
    this.router.navigate(['/forget_password']);
  }
}
