import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('popOverState', [
  //     state('show', style({
  //       opacity: 1
  //     })),
  //     state('hide', style({
  //       opacity:0
  //     })),
  //     transition('show => hide', animate('600ms, ease-out')),
  //     transition('hide => show', animate('1000ms, ease-in'))
  //   ])
  // ]
})
export class HomeComponent implements OnInit {
  total = 145;
  graduate = 45;
  ungraduate = 100;
  data: any;

  show = false;
  chartOptions: any;

  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['Graduate','Ungraduate'],
      datasets: [
          {
              data: [this.graduate, this.ungraduate],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ]
          }
      ]
    };

  }

  // get stateName(){
  //   return this.show ? 'show' : 'hide'
  // }

  // toggle(){
  //   this.show = !this.show;
  // }

}
