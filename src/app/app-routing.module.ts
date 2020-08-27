import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeTeacherComponent} from './components/be-teacher/be-teacher.component';
import {InfoContactComponent} from './components/info-contact/info-contact.component';
import {SubjectComponent} from './components/subject/subject.component';
import {TeacherComponent} from './components/teacher/teacher.component';

const routes: Routes = [
  { path: 'subjects', component: SubjectComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'be-teacher', component: BeTeacherComponent },
  { path: 'info-contact', component: InfoContactComponent },
  { path: '',   redirectTo: '/subject', pathMatch: 'full' }, 
  { path: '**', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
