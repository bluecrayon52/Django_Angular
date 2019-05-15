import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl+'/users/', 
    {headers: this.httpHeaders});
  }
  
  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl+'/users/' + id + '/', 
    {headers: this.httpHeaders});
  }
  
  // what about dogs?
  updateUser(user): Observable<any> {
    const body = { first_name: user.first_name, last_name: user.last_name, username: user.username, email: user.email }
    return this.http.put(this.baseurl+'/users/' + user.id + '/', body,
    {headers: this.httpHeaders});
  }

  // what about dogs? 
  createUser(user): Observable<any> {
    const body = { first_name: user.first_name, last_name: user.last_name, username: user.username, email: user.email }
    return this.http.post(this.baseurl+'/users/', body,
    {headers: this.httpHeaders});
  }

  // what about dogs? 
  deleteUser(id): Observable<any> {
    return this.http.delete(this.baseurl+'/users/' + id + '/', 
    {headers: this.httpHeaders});
  }
}