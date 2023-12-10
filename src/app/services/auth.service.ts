import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://your-api-url.com/login'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password }).pipe(
      map(response => {
        // If login is successful, you might want to store the token
        // localStorage.setItem('authToken', response.token);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  // Implement a method for logging out if needed
  logout() {
    // Remove the token from storage
    // localStorage.removeItem('authToken');
  }

  // Check if the user is logged in (based on the token)
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    // Here you should add logic to check if the token is valid
    return !!token;
  }

  // Handle any errors from the API
  private handleError(error: any) {
    // You can add more sophisticated error handling here
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(()=>errorMessage);
  }
}

