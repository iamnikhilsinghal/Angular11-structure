import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_URL } from '../Config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  login({ email = '', password = '' }): Observable<any> {
    return this.http.post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }
}
