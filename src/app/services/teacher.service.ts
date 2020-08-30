import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {

  URI:string='';
  teacher;
  id;
  flat:boolean=false;
  //resiven los valores desde login.component
  userDeails;

  token:string;
  //User para ver si es teacher o no
  User;
  constructor(private http:HttpClient,private userService: UserService) { 
    this.URI = 'http://127.0.0.1:8000/api/teachers/';
  }
  addTeacher(teacher){
    console.log(teacher)
    let headers = new HttpHeaders()
 
    headers=headers.append('content-type','application/json')
    headers=headers.append('Authorization','Bearer '+ this.token);
    console.log(headers)
    return this.http.post(this.URI,teacher,{headers})
  }

  getTeachers(){
    return this.http.get(this.URI);
  }

  getTeacher(i:string){
    return this.http.get(this.URI+i);
  }
  infoTeacher(teacherTeacher){
    this.teacher = teacherTeacher;
  }
  receiveId(i){
      this.id=i
  }

  //lo que se resive de login.component
  setToken(token:string){
    this.token=token;
  }
  receiveUser(user){
    this.userDeails=user.success;
    this.userService.getUser(this.userDeails.id).subscribe(
      res =>{
        this.User=res;
      }
    )
  }

}
