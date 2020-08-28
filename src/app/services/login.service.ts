import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URIregister:string='';
  URIlogin:string='';
  token:string;
  constructor(private http:HttpClient) { 
    this.URIregister = 'http://127.0.0.1:8000/api/register';
    this.URIlogin = 'http://127.0.0.1:8000/api/login';
  }
  postRegister(newUser){
    return this.http.post(this.URIregister,newUser)
  }
  postLogin(user){
    return this.http.post(this.URIlogin,user)
  }
  setToken(token:string){
    this.token=token;
  }
}
