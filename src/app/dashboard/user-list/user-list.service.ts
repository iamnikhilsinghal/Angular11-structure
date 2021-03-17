import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/Config';

@Injectable({ providedIn: 'root' })
export class UserListService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    console.log('here');

    return this.http.get(`${API_URL}/user/info`);
  }
}
