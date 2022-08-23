import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MenuState} from "../../../app.component";
import {ANIMATIONSLIDETIME} from "../navbar/navigation-animation";
import {
    aboutBorderInOut,
    aboutTextInOut, contactBorderInOut,
    contactTextInOut, skillsBorderInOut,
    skillsTextInOut,
    worksBorderInOut,
    worksTextInOut
} from "./sidenav-animation";

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.sass'],
    animations: [
        aboutTextInOut,
        worksTextInOut,
        skillsTextInOut,
        contactTextInOut,
        aboutBorderInOut,
        worksBorderInOut,
        skillsBorderInOut,
        contactBorderInOut
    ]
})
export class SidemenuComponent implements OnInit, OnChanges {
    @Input() menuState?: MenuState

    textAnimationState?: "open" | "close"

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.menuState) {
            setTimeout(() => {
                this.textAnimationState = this.menuState
            }, ANIMATIONSLIDETIME)
        }
    }

}
