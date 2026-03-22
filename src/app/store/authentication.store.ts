import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type AuthenticationStore = {
  isSignedIn: boolean;
};

const initialAuthenticationStore: AuthenticationStore = {
  isSignedIn: false,
};

export const AuthenticationStore = signalStore(
  { providedIn: 'root' },
  withState(initialAuthenticationStore),
  withMethods((store) => ({
    setAuthentication: (isSignedIn: boolean) => {
      patchState(store, () => ({ isSignedIn }));
    },
  })),
);
