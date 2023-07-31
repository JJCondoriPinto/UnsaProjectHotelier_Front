import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthenticateService } from '../services/api/auth/authenticate.service';
import { map, take, tap, catchError } from 'rxjs';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router)
  const authService = inject(AuthenticateService);
  return authService.isAuthenticate().pipe(
    map((isLoggedIn) => isLoggedIn || router.navigate(['/login'])),
    catchError((error) => router.navigate(['/login']))
  )

};
