import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.css']
})
export class InfoContactComponent implements OnInit {
  teacher;
  constructor(private teacherService:TeacherService) { 
    this.getTeacher();
  }

  ngOnInit(): void {
  }

  getTeacher(){
    if(this.teacherService.flat){
      this.teacherService.getTeacher(this.teacherService.id)
      .subscribe(
        res=>{
          this.teacher = res;
          console.log('subject',this.teacher);
        },
        err=>console.log(err)
      )
    }else{
      this.teacher = this.teacherService.teacher;
      this.teacherService.flat=true;
      console.log('teacher',this.teacher);
    }
  }
}
