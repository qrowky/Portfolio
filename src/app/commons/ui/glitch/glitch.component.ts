import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glitch',
  templateUrl: './glitch.component.html',
  styleUrls: ['./glitch.component.sass']
})
export class GlitchComponent implements OnInit {
  @Input() text?: string
  
  constructor() { }

  ngOnInit(): void {
  }

}
