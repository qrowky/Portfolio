import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-roll-up-headband',
    templateUrl: './roll-up-headband.component.html',
    styleUrls: ['./roll-up-headband.component.sass']
})
export class RollUpHeadbandComponent implements OnInit {
    @Input() direction?: "right" | "left"
    @Input() text?: string
    @Input() size?: "sm" | "md" | "lg" = "md"

    constructor() {
    }

    ngOnInit(): void {
    }

}
