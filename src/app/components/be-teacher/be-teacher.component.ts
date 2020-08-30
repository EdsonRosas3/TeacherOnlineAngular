import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LoginService} from "../../services/login.service";
//forms
import { FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-be-teacher',
  templateUrl: './be-teacher.component.html',
  styleUrls: ['./be-teacher.component.css']
})
export class BeTeacherComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  signupForm=this._builder.group({
    university: ['',  [Validators.required,  Validators.maxLength(50)]],
    carrera: ['', [Validators.required, Validators.maxLength(40)]],
    whatsapp: ['',[Validators.required, Validators.maxLength(10)]],
    telegram: ['',[Validators.required, Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.maxLength(160)]],
  })

  constructor(
    private authService: SocialAuthService,
    private loginService: LoginService,
    private _builder:FormBuilder,  
  ) { 

  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });


  }
  save( event){
      console.log(event);
  }


  

}
