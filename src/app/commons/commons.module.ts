import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './global/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { GlitchComponent } from './ui/glitch/glitch.component';
import { CanvasComponent } from './global/canvas/canvas.component';

@NgModule({
  declarations: [
      NavbarComponent,
      GlitchComponent,
      CanvasComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
    exports: [
        NavbarComponent,
        CanvasComponent,
    ]
})
export class CommonsModule { }
