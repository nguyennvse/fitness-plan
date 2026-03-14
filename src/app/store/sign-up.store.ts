import { computed, signal } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type SignUpStateType = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  dateOfBirth: string;
};

const initialSignUpState: SignUpStateType = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  dateOfBirth: '',
};

export const SignUpStore = signalStore(
  { providedIn: 'root' },
  withState(initialSignUpState),
  withComputed((store) => ({
    fullName: computed(() => `${store.firstName()} ${store.lastName()}`),
  })),
  withMethods((store) => ({
    saveSignUpForm(signUpState: SignUpStateType): void {
      patchState<SignUpStateType>(store, {
        firstName: signUpState.firstName,
        lastName: signUpState.lastName,
        address: signUpState.address,
        email: signUpState.email,
        phone: signUpState.phone,
        dateOfBirth: signUpState.dateOfBirth,
      });
    },
  })),
);
