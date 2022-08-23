import { Component } from '@angular/core';
import {menuSlideInOut} from "./commons/global/navbar/navigation-animation";

export type MenuState = "open" | "close"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [ menuSlideInOut ]
})
export class AppComponent {
  title = 'angular-three';

  menuState: MenuState = 'close';

  toggle() {
    this.menuState = this.menuState === 'close' ? 'open' : 'close';
  }
}
