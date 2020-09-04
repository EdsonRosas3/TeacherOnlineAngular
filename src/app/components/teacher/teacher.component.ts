import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers;
  constructor(private teacherService:TeacherService) { 
    this.getTeachers();
  }

  ngOnInit(): void {
  }

  getTeachers(){
    this.teacherService.getTeachers()
    .subscribe(
      res=>{
        this.teachers = res;
        this.teachers = this.teachers.teachers
      },
      err=>console.log(err)
    )
  }
  teacherAll(teacher){
    this.teacherService.flat = false;
    this.teacherService.infoTeacher(teacher);
  }

}
