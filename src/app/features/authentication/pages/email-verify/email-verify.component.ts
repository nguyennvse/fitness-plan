import { Component, inject } from '@angular/core';
import { SignUpStore } from '../../store/sign-up.store';

@Component({
  selector: 'app-confirm',
  imports: [],
  templateUrl: './email-verify.component.html',
  styleUrl: './email-verify.component.css',
})
export class EmailVerifyComponent {
  signUpStore = inject(SignUpStore);
  constructor() {
    console.log('signUpStore', this.signUpStore.fullName());
  }
}
