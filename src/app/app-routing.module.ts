import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'add-new-student', component: AddNewStudentComponent},

  
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
