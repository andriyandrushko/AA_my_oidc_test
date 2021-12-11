import { NgModule } from '@angular/core';
import { LogLevel } from '../../../angular-auth-oidc-client/src/lib/angular-auth-oidc-client';
import { AuthModule } from '../../../angular-auth-oidc-client/src/lib/auth.module';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: LogLevel.Debug,
        historyCleanupOff: false,
        //authority: 'https://localhost:44318',
        authority: 'https://demo.identityserver.io/',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'interactive.public',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
