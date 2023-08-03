import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../services/api/auth/authenticate.service';
import { map, catchError } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthenticateService);
  return authService.isAuthenticate().pipe(
    map((isLoggedIn) => isLoggedIn || router.navigate(['/login'])),
    catchError(() => router.navigate(['/login']))
  )

};
