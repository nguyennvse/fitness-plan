import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type AuthenticationStore = {
  isSignedIn: boolean;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  dateOfBirth: string;
};

const initialAuthenticationStore: AuthenticationStore = {
  isSignedIn: false,
  email: 'nguyennvse@gmail.com',
  firstName: 'Nguyen',
  lastName: 'Nguyen Vinh',
  address: '123 Ly Thuong Kiet, Phuong Tan Hoa, HCM',
  phone: '09123456',
  dateOfBirth: '12032000',
};

export const AuthenticationStore = signalStore(
  { providedIn: 'root' },
  withState(initialAuthenticationStore),
  withComputed((store) => ({
    fullName: computed(() => {
      return `${store.lastName()} ${store.firstName()}`;
    }),
  })),
  withMethods((store) => ({
    setAuthentication: (isSignedIn: boolean) => {
      patchState(store, () => ({ isSignedIn }));
    },
  })),
);
