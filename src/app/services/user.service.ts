import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9090/api/v1/user';

  constructor(private http: HttpClient) {}

  storeUserData(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log('Stored user data:', user);
  }
  

  getUserData(): any {
    if (typeof localStorage !== 'undefined') {
      const userJson = localStorage.getItem('currentUser');
      const user = userJson ? JSON.parse(userJson) : null;
      console.log('Retrieved user data:', user);
      return user;
    }
    return null;
  }
  
  

  clearUserData() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post('http://localhost:9090/api/v1/user/login', credentials, { responseType: 'text' })
      .pipe(
        map(response => {
          if (response === 'Login successful') {
            this.storeUserData(credentials); // Store user data upon successful login
            return response;
          } else {
            throw new Error('Invalid matricule or password');
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error in login:', error);
          return throwError('Error occurred during login. Please try again.');
        })
      );
  }

  getUserIdByMatricule(matricule: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${matricule}/id`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching user ID:', error);
        return throwError('Error occurred while fetching user ID.');
      })
    );
  }
  
}
