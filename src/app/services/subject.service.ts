import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//services Login
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  URI:string='';
  URIsubjectsteacher='';
  constructor(private http: HttpClient, private loginService:LoginService) { 
    this.URI='http://127.0.0.1:8000/api/subjects/';
    this.URIsubjectsteacher= 'http://127.0.0.1:8000/api/teacherSubjects/';
  }

  getSubjects(){
    return this.http.get(this.URI);
  }

  getSubject(i:string){
    return this.http.get(this.URI+i);
  }
  addSubject(subject){

    let headers = new HttpHeaders()
 
    headers=headers.append('content-type','application/json')
    headers=headers.append('Authorization','Bearer '+ this.loginService.token);
    console.log(headers)
    return this.http.post(this.URI,subject,{headers})
  }

  getSubjectsTeacher(i:string){
    return this.http.get(this.URIsubjectsteacher+i);
  }

  deleteSubject(i){
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json')
    headers=headers.append('Authorization','Bearer '+ this.loginService.token);
    console.log(headers)

    return this.http.delete(this.URI+i,{headers});
  }
}
