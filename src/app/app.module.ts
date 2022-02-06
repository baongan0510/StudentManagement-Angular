import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import {MultiSelectModule} from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';

import { AutoCompleteModule } from "primeng/autocomplete";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import { FormsModule } from '@angular/forms';

import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    StudentsComponent,
    PageNotFoundComponent,
    AddNewStudentComponent,

  ],
  imports: [
    BrowserModule,
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    AutoCompleteModule,
    PasswordModule,
    FormsModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
