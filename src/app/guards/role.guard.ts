import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageInfoService } from '../services/local/storage-info.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageInfoService);
  const router = inject(Router)
  const role = route.data['role'];
  const roleAuth = storage.getRol();
  return role === roleAuth || router.navigate([`dashboard/${roleAuth}/`]);
};
