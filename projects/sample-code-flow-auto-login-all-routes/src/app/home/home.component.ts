import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataResult } from '../../../../angular-auth-oidc-client/src/lib/angular-auth-oidc-client';
import { OidcSecurityService } from '../../../../angular-auth-oidc-client/src/lib/oidc.security.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  userData$: Observable<UserDataResult>;
  isAuthenticated = false;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;

      console.warn('authenticated: ', isAuthenticated);
    });
    this.userData$ = this.oidcSecurityService.userData$;
  }
}
