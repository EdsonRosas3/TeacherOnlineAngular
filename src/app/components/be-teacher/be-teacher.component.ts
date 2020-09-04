import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
//services
import {TeacherService} from "../../services/teacher.service";


//forms
import { FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-be-teacher',
  templateUrl: './be-teacher.component.html',
  styleUrls: ['./be-teacher.component.css']
})
export class BeTeacherComponent implements OnInit {

  //este atributo es donde se creara el nuevo teacher
  newTeacher;
  //bandera para saber si es teacher
  flagisTeacher:boolean=false;

  user: SocialUser;
  loggedIn: boolean;
  flagAddSubject:boolean;
  signupForm=this._builder.group({
    university: ['',  [Validators.required,  Validators.maxLength(50)]],
    carrera: ['', [Validators.required, Validators.maxLength(40)]],
    whatsapp: ['',[Validators.required, Validators.maxLength(10)]],
    telegram: ['',[Validators.required, Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.maxLength(160)]],
  })

  constructor(
    private authService: SocialAuthService,
    private teacherService: TeacherService,
    private _builder:FormBuilder, 
  ) { 

  }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  save( datos){
    this.flagAddSubject = true;
    //espera hasta que this.teacherService.User tenga valores
  // while(!this.teacherService.User){}
  console.log(this.teacherService.User.teacher.length)
  if(this.teacherService.User.teacher.length == 0){
    this.flagisTeacher = true;
  }
    if(this.flagisTeacher){
      this.newTeacher={
        university:datos.university,
        description:datos.description,
        user_id:this.teacherService.User.id,
        college_career:datos.carrera,
        url_telegram:datos.telegram,
        whatsapp:datos.whatsapp
      }
       this.teacherService.addTeacher(this.newTeacher).subscribe(
          res=>{
             console.log(res) 
          },
          res=>console.log(res)
        )
  
       
    }
    console.log(this.newTeacher);
  }




  

}
