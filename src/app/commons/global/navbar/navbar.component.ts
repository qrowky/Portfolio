import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { burgerOnOffBottom, burgerOnOffMiddle, burgerOnOffTop, navigationTextOnOff} from "./navigation-animation";
import {MenuState} from "../../../app.component";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass'],
    animations: [burgerOnOffTop, burgerOnOffMiddle, burgerOnOffBottom, navigationTextOnOff]
})
export class NavbarComponent implements OnInit {
    @Input() menuState?: MenuState
    @Output() menuStateChange = new EventEmitter<MenuState>()

    constructor() {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.menuStateChange.emit(this.menuState === 'close' ? 'open' : 'close');
    }
}
