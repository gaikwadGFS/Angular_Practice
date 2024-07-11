import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ValidationComponent } from './components/validation/validation.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:'login',
    component:LoginComponent
  },
 
  {
    path:'',
    component:NavbarComponent,
    children:[
  
      {
        path:'student',
        component:StudentComponent,
      },
      {
        path:'teacher',
        component:TeacherComponent
      },
      {
        path:'typescript',
        component:TypescriptComponent
      },
      {
        path:'databinding',
        component:DataBindingComponent
      },
      {
        path:'ng-if',
        component:NgIfComponent
      },
      {
        path:'ng-for',
        component:NgForComponent
      },
      {
        path:'ngClass',
        component:NgClassComponent
      },
      {
        path:'ngStyle',
        component:NgStyleComponent
      },
      {
        path:'tasks',
        component:TasksComponent
      },
      {
        path:'pipe',
        component:PipeComponent
      },
      {
        path:'templateForm',
        component:TemplateFormComponent
      },
      {
        path:'validation',
        component:ValidationComponent
      },
      {
        path:'**',
        component:ErrorPageComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
