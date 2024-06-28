import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
=======
>>>>>>> 4423cf47ba256c32c73272d8d83c198dac849fa7

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
<<<<<<< HEAD
    TypescriptComponent,
    NavbarComponent,
    ErrorPageComponent
=======
    TypescriptComponent
>>>>>>> 4423cf47ba256c32c73272d8d83c198dac849fa7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
