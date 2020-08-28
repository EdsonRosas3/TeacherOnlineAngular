import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects;
  teacher;
  constructor(
    private subjectService:SubjectService,
    private teacherService:TeacherService
    ) { 
      this.getSubjects();
    }

  ngOnInit(): void {
  }
  getSubjects(){
    this.subjectService.getSubjects()
    .subscribe(
      res=>{
        this.subjects = res;
        this.subjects = this.subjects.subjects;
      },
      err=>console.log(err)
    )
  }
  teacherId(i){
      this.teacherService.flat=true;
      this.teacherService.receiveId(i);
  }

}
