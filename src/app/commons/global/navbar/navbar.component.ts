import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [
      trigger('openCloseBurger', [
        state('open', style({

        })),
        state('closed', style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue'
        })),
        transition('open => closed', [
          animate('1s')
        ]),
        transition('closed => open', [
          animate('0.5s')
        ]),
      ]),
      trigger('openCloseSideMenu', [
      state('open', style({})),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [ animate('1s') ]),
      transition('closed => open', [ animate('0.5s') ]),
    ])
  ]
})
export class NavbarComponent{

  isOpen = true;

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
