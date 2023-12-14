import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';
import { isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export function authGuard(): Observable<boolean | UrlTree> {
  const router = inject(Router);
  const auth = inject(Auth);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformServer(platformId)) {
    // Handle server-side logic
    // Perhaps always return true or false based on your needs
    return of(true);
  }
  return authState(auth).pipe(map(user => !!user || router.createUrlTree(['/login'])));
}

export function reverseAuthGuard(): Observable<boolean | UrlTree> {
  const router = inject(Router);
  const auth = inject(Auth);

  return authState(auth).pipe(
    map(user => {
      if (user) {
        // User is logged in, redirect to another page (e.g., home page)
        return router.createUrlTree(['/']);
      } else {
        // User not logged in, allow access to the login page
        return true;
      }
    })
  );
}
