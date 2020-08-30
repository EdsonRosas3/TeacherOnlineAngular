import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {UserService} from "../../services/user.service";
import {LoginService} from "../../services/login.service";
import {TeacherService} from "../../services/teacher.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users;
  user: SocialUser;
  loggedIn: boolean;
  flag:Boolean=false;
  success;
  constructor(
    private authService: SocialAuthService,
    private userService: UserService,
    private loginService: LoginService,
    private teacherService: TeacherService,
    ) { 
      this.getusers();
    }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.userIsRegistered();
      this.loggedIn = (user != null);
    });
   
  }
  getusers(){
    this.userService.getUsers()
    .subscribe(
      res=>{
        this.users = res;
        this.users = this.users.users
      },
      err=>console.log(err)
    )
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  userIsRegistered(){
    
    this.users.forEach(userI => {
      if(this.user.email == userI.email){
        this.flag=true;
      }
    });
    if(!this.flag){
      const user = {
        first_name:this.user.firstName,
        last_name:this.user.lastName,
        email:this.user.email,
        password:this.user.id,
        avatar:this.user.photoUrl
      };
      this.loginService.postRegister(user).subscribe(
        res=>{
          this.success=res;
          this.success =this.success.success;
          this.loginService.setToken(this.success.token);
          this.teacherService.setToken(this.success.token);
          this.details();
        }
      )
     
    }else{
       
        const user ={
          email:this.user.email,
          password:this.user.id,
        }
        this.loginService.postLogin(user).subscribe(
          res=>{
            this.success=res;
            this.success =this.success.success;
            this.loginService.setToken(this.success.token);
            this.teacherService.setToken(this.success.token);
            this.details();
          }
         
        )
    }
  }

  details(){
    this.loginService.getDetails().subscribe(
      res=>{
        this.teacherService.receiveUser(res);
      },
      err=>console.log(err)
    )
    
  }


}
