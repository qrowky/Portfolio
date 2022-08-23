import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {ANIMATION_SLIDE_TIME_MS} from "../navbar/navigation-animation";

export const aboutTextInOut =
    trigger('aboutTextInOut', [
        state('open', style({
           transform: "translateY(0)",
           opacity: 1
        })),
        transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' linear', keyframes([
            style({opacity: 1}),
            style({transform: "translateY(100%)"}),
            style({transform: "translateX(0)"})
        ])))
    ])

export const worksTextInOut =
    trigger('worksTextInOut', [
    state('open', style({
        transform: "translateY(0)",
        opacity: 1
    })),
    transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' 100ms ease-in-out', keyframes([
        style({opacity: 1}),
        style({transform: "translateY(100%)"}),
        style({transform: "translateX(0)"})
    ])))
])

export const skillsTextInOut =
    trigger('skillsTextInOut', [
        state('open', style({
            transform: "translateY(0)",
            opacity: 1
        })),
        transition('close => open', animate( ANIMATION_SLIDE_TIME_MS + ' 150ms ease-in-out', keyframes([
            style({opacity: 1}),
            style({transform: "translateY(100%)"}),
            style({transform: "translateX(0)"})
        ])))
    ])

export const contactTextInOut =
    trigger('contactTextInOut', [
        state('open', style({
            transform: "translateY(0)",
            opacity: 1
        })),
        transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' 200ms ease-in-out', keyframes([
            style({opacity: 1}),
            style({transform: "translateY(100%)"}),
            style({transform: "translateX(0)"})
        ])))
    ])

export const aboutBorderInOut =
    trigger('aboutBorderInOut', [
        state('open', style({
            width: "100%"
        })),
        transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' ease-in-out', keyframes([
            style({width: "0"}),
            style({width: "50%"}),
            style({width: "100%"})
        ])))
    ])

export const worksBorderInOut =
    trigger('worksBorderInOut', [
        state('open', style({
            width: "100%"
        })),
        transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' 100ms ease-in-out', keyframes([
            style({width: "0"}),
            style({width: "50%"}),
            style({width: "100%"})
        ])))
    ])

export const skillsBorderInOut =
    trigger('skillsBorderInOut', [
        state('open', style({
            width: "100%"
        })),
        transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' 150ms ease-in-out', keyframes([
            style({width: "0"}),
            style({width: "50%"}),
            style({width: "100%"})
        ])))
    ])

export const contactBorderInOut =
    trigger('contactBorderInOut', [
        state('open', style({
            width: "100%"
        })),
        transition('close => open', animate(ANIMATION_SLIDE_TIME_MS + ' 200ms ease-in-out', keyframes([
            style({width: "0"}),
            style({width: "50%"}),
            style({width: "100%"})
        ])))
    ])

