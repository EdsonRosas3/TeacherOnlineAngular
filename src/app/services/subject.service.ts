import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  URI:string='';
  constructor(private http: HttpClient) { 
    this.URI='http://127.0.0.1:8000/api/subjects/';
    console.log(this.URI);
  }

  getSubjects(){
    return this.http.get(this.URI);
  }

  getSubject(i:string){
    return this.http.get(this.URI+i);
  }
}
