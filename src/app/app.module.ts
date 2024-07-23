import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { NaPipe } from './pipes/na.pipe';

import { TemplateFormComponent } from './components/template-form/template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidationComponent } from './components/validation/validation.component';
import { AlertBoxComponent } from './ResusableComponent/alert-box/alert-box.component';
import { TableComponent } from './ResusableComponent/table/table.component';
import { HightlightMeDirective } from './Directives/Highlight/hightlight-me.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    TypescriptComponent,
    NavbarComponent,
    ErrorPageComponent,
    LoginComponent,
    DataBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    TasksComponent,
    PipeComponent,
    NaPipe,
    TemplateFormComponent,
    ValidationComponent,
    AlertBoxComponent,
    TableComponent,
    HightlightMeDirective,
    CustomDirectiveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
