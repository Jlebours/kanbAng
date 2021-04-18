import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserServiceRes } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class KanbanAPIService {
  constructor( private http: HttpClient ) {}

  getUsers(): Observable<UserServiceRes[]> {
    return this.http.get<UserServiceRes[]>('/api/utilisateur/');
  }

  getUserInfos(mail: string): Observable<UserServiceRes>{
    return this.http.get<UserServiceRes>('/api/utilisateur/' + mail + '/');
  }

  // tslint:disable-next-line: typedef
  postUser(user: User): Observable<User>{
    return this.http.post<User>('/api/utilisateur/', user, httpOptions);
  }

  removeUser(mail: string): Observable<User>{
    return this.http.delete<User>('/api/utilisateur/' + mail + '/');
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>('/api/utilisateur/', user, httpOptions);
  }
}
