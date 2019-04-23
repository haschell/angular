// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  private ideToken: string;
  private aCcessToken: string;
  private eXpiresAt: number;

  public userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: 'LPSTfH2SMVSCSB25a2Ok3RZt8hJArq5d',
    domain: 'roberto-ruiz-dev.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {
    this.ideToken = '';
    this.aCcessToken = '';
    this.eXpiresAt = 0;
  }

  get accessToken(): string {
    return this.aCcessToken;
  }

  get idToken(): string {
    return this.ideToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this.aCcessToken = authResult.accessToken;
    this.ideToken = authResult.idToken;
    this.eXpiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this.aCcessToken = '';
    this.ideToken = '';
    this.eXpiresAt = 0;

    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this.aCcessToken && Date.now() < this.eXpiresAt;
  }

  public getProfile(cb): void {
    if (!this.aCcessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(this.aCcessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

}
