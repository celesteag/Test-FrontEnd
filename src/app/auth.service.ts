import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface User {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, {username, password});
  }

  login(username: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, {username, password});
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
