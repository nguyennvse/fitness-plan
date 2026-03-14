import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthen = true;
  constructor() { }

  public isAuthenticated() {
    return !this.isAuthen
  }
}
