import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  textAnimationState?: "open" | "close"


  constructor() { }

  ngOnInit(): void {
    
    const options = {
      strings: ['FullStack','Angular', 'Java', 'Groovy', 'Nodejs'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    
    const typed = new Typed('.typed-element', options);  

  }

}
