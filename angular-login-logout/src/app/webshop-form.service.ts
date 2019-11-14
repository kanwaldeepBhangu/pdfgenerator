import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class WebshopFormService {

  constructor(private http: HttpClient) { }

  webshopFormService() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('javaguides' + ':' + 'password') });
    return this.http.get<Message>('http://localhost:8080/api/v1/greeting');
  }
}
