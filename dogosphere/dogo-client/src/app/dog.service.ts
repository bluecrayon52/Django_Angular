import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getAllDogs(): Observable<any> {
    return this.http.get(this.baseurl+'/dogs/', 
    {headers: this.httpHeaders});
  }
  
  getOneDog(id): Observable<any> {
    return this.http.get(this.baseurl+'/dogs/' + id + '/', 
    {headers: this.httpHeaders});
  }
  // what about owners? 
  updateDog(dog): Observable<any> {
    const body = { name: dog.name, breed: dog.breed, bday: dog.bday, desc: dog.desc }
    return this.http.put(this.baseurl+'/dogs/' + dog.id + '/', body,
    {headers: this.httpHeaders});
  }

  // what about owners? 
  createDog(dog): Observable<any> {
    const body = { name: dog.name, breed: dog.breed, bday: dog.bday, desc: dog.desc }
    return this.http.post(this.baseurl+'/dogs/', body,
    {headers: this.httpHeaders});
  }

  // what about owners? 
  deleteDog(id): Observable<any> {
    return this.http.delete(this.baseurl+'/dogs/' + id + '/', 
    {headers: this.httpHeaders});
  }
}
