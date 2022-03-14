import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'projects/core-lib/src/lib/models/user.model';
import { SERVER_API_CONFIG, ServerApiConfig } from 'projects/core-lib/src/lib/services/server-api-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    @Inject(SERVER_API_CONFIG) private serverApiConfig: ServerApiConfig) {
    this.baseUrl = `${serverApiConfig.baseUrl}/users/`;
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  getByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}?email=${email}`);
  }

  save(user: User): Observable<User> {
    if (user.id) {
      return this.httpClient.put<User>(`${this.baseUrl}${user.id}`, user);
    } else {
      return this.httpClient.post<User>(this.baseUrl, user);
    }
  }
}
