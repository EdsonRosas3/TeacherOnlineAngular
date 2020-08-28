import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URI:string='';
 
  constructor(private http:HttpClient) { 
    this.URI = 'http://127.0.0.1:8000/api/users/';
  
  }
  getUsers(){
    return this.http.get(this.URI);
  }

  getUser(i:string){
    return this.http.get(this.URI+i);
  }
}
