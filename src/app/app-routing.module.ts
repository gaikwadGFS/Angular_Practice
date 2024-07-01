import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';

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
