import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URIregister:string='';
  URIlogin:string='';
  URIdetails:string='';
  token:string='';
  constructor(private http:HttpClient) { 
    this.URIregister = 'http://127.0.0.1:8000/api/register';
    this.URIlogin = 'http://127.0.0.1:8000/api/login';
    this.URIdetails = 'http://localhost:8000/api/details';
  }
  postRegister(newUser){
    return this.http.post(this.URIregister,newUser)
  }
  postLogin(user){
    return this.http.post(this.URIlogin,user)
  }
  setToken(token:string){
    this.token= token;
   
  }
  getDetails(){
      let headers = new HttpHeaders()
 
          headers=headers.append('content-type','application/json')
          headers=headers.append('Authorization','Bearer '+ this.token);
    
    return this.http.post(this.URIdetails,{} ,{headers});

  }
}
