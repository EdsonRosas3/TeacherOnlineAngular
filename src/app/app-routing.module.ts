import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeTeacherComponent} from './components/be-teacher/be-teacher.component';
import {InfoContactComponent} from './components/info-contact/info-contact.component';
import {SubjectComponent} from './components/subject/subject.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {LoginComponent} from './components/login/login.component';
import {MySubjectsComponent} from './components/my-subjects/my-subjects.component';

const routes: Routes = [
  { path: 'subjects', component: SubjectComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'be-teacher', component: BeTeacherComponent },
  { path: 'info-contact', component: InfoContactComponent },
  { path: 'login', component: LoginComponent},
  { path: 'my-subjects', component: MySubjectsComponent},
  { path: '',   redirectTo: '/subject', pathMatch: 'full' }, 
  { path: '**', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
