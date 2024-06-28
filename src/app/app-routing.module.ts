import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'navbar',
  //   pathMatch:'full'
  // },
 
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
=======

const routes: Routes = [];
>>>>>>> 4423cf47ba256c32c73272d8d83c198dac849fa7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
