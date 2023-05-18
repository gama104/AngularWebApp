import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44340/api/auth';

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string): Observable<any> {
    const signInData = { username, password };
    return this.http.post(`${this.apiUrl}/signin`, signInData);
  }
}
