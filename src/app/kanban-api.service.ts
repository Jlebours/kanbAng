import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceRes } from './user';

@Injectable({
  providedIn: 'root'
})
export class KanbanAPIService {
  constructor( private http: HttpClient ) {}

  getUsers(): Observable<UserServiceRes[]> {
    return this.http.get<UserServiceRes[]>('/utilisateur/');
  }
}
