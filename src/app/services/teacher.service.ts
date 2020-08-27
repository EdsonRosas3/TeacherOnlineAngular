import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  URI:string='';
  teacher;
  id;
  flat:boolean=false;
  constructor(private http:HttpClient) { 
    this.URI = 'http://127.0.0.1:8000/api/teachers/';
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
}
