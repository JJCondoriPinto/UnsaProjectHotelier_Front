import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../services/api/auth/authenticate.service';
import { catchError, map, of } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthenticateService);
  return authService.isAuthenticate().pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        router.navigate(['/dashboard']);
        return false;
      }
      return true;
    }),
    catchError((error) => of(true))
  )
};
