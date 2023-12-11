import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';

export function authGuard(): Observable<boolean | UrlTree> {
  const router = inject(Router);
  const auth = inject(Auth);

  return authState(auth).pipe(
    map(user => !!user || router.createUrlTree(['/login']))
  );
}

export function reverseAuthGuard(): Observable<boolean | UrlTree> {
  const router = inject(Router);
  const auth = inject(Auth);

  return authState(auth).pipe(
    map(user => {
      if (user) {
        // User is logged in, redirect to another page (e.g., home page)
        return router.createUrlTree(['/home']);
      } else {
        // User not logged in, allow access to the login page
        return true;
      }
    })
  );
}
