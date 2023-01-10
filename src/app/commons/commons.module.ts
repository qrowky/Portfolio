import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './global/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { GlitchComponent } from './ui/glitch/glitch.component';

@NgModule({
  declarations: [
      NavbarComponent,
      GlitchComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
    exports: [
        NavbarComponent,
    ]
})
export class CommonsModule { }
