import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';

export function configureAuth(oidcConfigService: OidcConfigService): () => Promise<any> {
    return () =>
        oidcConfigService.withConfig({
            stsServer: 'please-enter-sts',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'please-enter-clientId',
            scope: 'please-enter-scopes', // 'openid profile ' + your scopes, offline_access if you refresh
            responseType: 'please-enter-responseType',
            silentRenew: true /* true  | false */,
            useRefreshToken: true /* true  | false */,
            renewTimeBeforeTokenExpiresInSeconds: 30,
        });
}

@NgModule({
    imports: [AuthModule.forRoot()],
    exports: [AuthModule],
    providers: [
        OidcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configureAuth,
            deps: [OidcConfigService],
            multi: true,
        },
    ],
})
export class AuthConfigModule {}