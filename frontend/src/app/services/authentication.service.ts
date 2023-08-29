import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { User } from '../User';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  login(user: User): Observable<any> {
    return this.http.post<User>(`${this.baseUrl}/api/login`, user, httpOptions);
  }
}
