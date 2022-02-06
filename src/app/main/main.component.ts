import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public studentMenu!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.studentMenu = [{
      label: 'Manage Student',
      items: [
        {label: 'Home', icon: 'pi pi-home', routerLink: ['/home']},
        {label: 'List of Students', icon: 'pi pi-list', routerLink: ['/students']},
        {label: 'Add student', icon: 'pi pi-plus', routerLink: ['/add-new-student']},
      ]
  },
  {
      label: 'Information',
      items: [
        {label: 'AboutUs', icon: 'pi pi-question-circle', routerLink: ['/popup']},
        {label: 'Sign-out', icon: 'pi pi-sign-out'}
      ]
  }];
  }

}
