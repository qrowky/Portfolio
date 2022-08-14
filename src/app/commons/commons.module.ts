import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./global/navbar/navbar.component";
import {RollUpHeadbandComponent} from "./ui/roll-up-headband/roll-up-headband.component";
import {CubeComponent} from "./ui/canvas/cube/cube.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
      CubeComponent,
      RollUpHeadbandComponent,
      NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
    exports: [
        CubeComponent,
        NavbarComponent
    ]
})
export class CommonsModule { }
