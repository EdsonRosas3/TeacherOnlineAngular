import { Component, OnInit } from '@angular/core';

//for form
import { FormBuilder, Validators} from "@angular/forms";

//the services
import {TeacherService} from "../../services/teacher.service";
import {LoginService} from "../../services/login.service";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-my-subjects',
  templateUrl: './my-subjects.component.html',
  styleUrls: ['./my-subjects.component.css']
})
export class MySubjectsComponent implements OnInit {

  flagAddSubject:boolean;
  userDetaill;
  teacherMasSubject;
  newSubject;
  subjects;

  signupForm=this._builder.group({
    name: ['',  [Validators.required,  Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(160)]],
    category: ['', [Validators.required]],
    price: ['',[Validators.required, Validators.maxLength(10)]],
  })
  constructor( private _builder:FormBuilder,private teacherService:TeacherService,
     private loginService:LoginService , private subjectService:SubjectService) { 

  } 

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser(){
    if(this.loginService.token){
      this.loginService.getDetails().subscribe(
        res=>{
         
          this.userDetaill=res;
          //console.log("Desde agregar materias",this.userDetaill.success);
          this.getTeacherMasSubject(this.userDetaill.success.id);
        }
      )
    }
  }

  getTeacherMasSubject(i:string){
    this.loginService.getTeacherId(i).subscribe(
      res=>{
        
        this.teacherMasSubject = res;
        this.subjects = this.teacherMasSubject.subjects;
        console.log("Esto es el teacher y sus materias",this.teacherMasSubject.subjects)
      }
    )
  }

  save(data){
    this.newSubject = {
      name_suject:data.name,
      price:data.price,
      area:data.category,
      content:"sin valor",
      description:data.description,
      teacher_id:this.teacherMasSubject.id
    }
    this.subjectService.addSubject(this.newSubject).subscribe(
      res=>{
        console.log(res);
        this.updateSubjects();
      }
    )
    this.addMateria()
    
  }
  addMateria(){
      this.flagAddSubject= !this.flagAddSubject;
  }
  updateSubjects(){
    this.subjectService.getSubjectsTeacher(this.teacherMasSubject.id).subscribe(
      res=>{
        this.subjects =res
      }
    )
  }

  deleteSubject(i){
    this.subjectService.deleteSubject(i).subscribe(
      res=>{
        console.log(res);
        this.updateSubjects();
      }
    )
  }
}
