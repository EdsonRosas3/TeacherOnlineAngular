import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { BeTeacherComponent } from './components/be-teacher/be-teacher.component';
import { InfoContactComponent } from './components/info-contact/info-contact.component';
import { HttpClientModule} from '@angular/common/http';
//Social
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { LoginComponent } from './components/login/login.component';
//form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MySubjectsComponent } from './components/my-subjects/my-subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    SuggestionComponent,
    SubjectComponent,
    TeacherComponent,
    BeTeacherComponent,
    InfoContactComponent,
    LoginComponent,
    MySubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '104462355168-mcgci9k379n2kg9ovb85hchdg24sub99.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
