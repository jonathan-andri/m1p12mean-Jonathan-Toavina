import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/User';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private apiUrl = environment.apiUrl + '/auth'; 
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { 
        // Check if user is already logged in
  }

  login(credentials: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Clear current user
    this.currentUserSubject.next(null);
  }

  hasRole(role: string): boolean {
    return localStorage.getItem('role') === role;
  }
  // getCurrentUser(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/auth/me`, {
  //     headers: this.getAuthHeaders()
  //   }).pipe(
  //     tap(user => {
  //       this.currentUserSubject.next(user);
  //     })
  //   );
  // }

  // loadCurrentUser(): void {
  //   const token = this.getToken();
  //   if (token) {
  //     this.getCurrentUser().subscribe({
  //       next: () => {},
  //       error: () => {
  //         // If error, token might be invalid
  //         this.logout();
  //       }
  //     });
  //   }
  // }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // private getAuthHeaders(): HttpHeaders {
  //   const token = this.getToken();
  //   return new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  // }

  getCurrentUserValue(): any {
    return this.currentUserSubject.value;
  }
}

