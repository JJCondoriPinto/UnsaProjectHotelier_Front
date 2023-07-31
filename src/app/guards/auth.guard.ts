import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../services/api/auth/authenticate.service';
import { map, take, tap, catchError } from 'rxjs';

export const authGuard: CanActivateFn = (childRoute, state) => {
  const router = inject(Router)
  const authService = inject(AuthenticateService);
  return authService.isAuthenticate().pipe(
    map((isLoggedIn) => isLoggedIn || router.navigate(['/login'])),
    catchError(() => router.navigate(['/login']))
  )

};
