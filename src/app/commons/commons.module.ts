import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RollUpHeadbandComponent} from "./ui/roll-up-headband/roll-up-headband.component";
import {CubeComponent} from "./ui/canvas/cube/cube.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './global/navbar/navbar.component';
import {SidemenuComponent} from "./global/sidemenu/sidemenu.component";

@NgModule({
  declarations: [
      CubeComponent,
      RollUpHeadbandComponent,
      SidemenuComponent,
      NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
    exports: [
        CubeComponent,
        SidemenuComponent,
        NavbarComponent
    ]
})
export class CommonsModule { }
