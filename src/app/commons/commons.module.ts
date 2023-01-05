import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './global/navbar/navbar.component';

@NgModule({
  declarations: [
      NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
    exports: [
        NavbarComponent,
    ]
})
export class CommonsModule { }
