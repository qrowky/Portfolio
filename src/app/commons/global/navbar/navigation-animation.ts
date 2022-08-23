import {animate, state, style, transition, trigger} from "@angular/animations";

export const ANIMATIONSLIDETIME = 400
export const ANIMATION_SLIDE_TIME_MS = "400ms"

export const menuSlideInOut =
    trigger('slideInOut', [
        state('open', style({
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        })),
        state('close', style({
            transform: 'translate3d(-100%, 0, 0)',
            opacity: 0
        })),
        transition('open => close', animate(ANIMATIONSLIDETIME + 'ms ease-in-out')),
        transition('close => open', animate(ANIMATIONSLIDETIME + 'ms ease-in-out'))
    ])

export const burgerOnOffTop =
    trigger('burgerOnOffTop', [
        state('open', style({
            transform: 'rotate(45deg) translateX(2px) translateY(4px)',
            width: '18px'
        })),
        state('close', style({
            transform: 'rotate(0)'
        })),
        transition('open => close', animate('400ms ease-in-out')),
        transition('close => open', animate('400ms ease-in-out'))
    ])

export const burgerOnOffMiddle =
    trigger('burgerOnOffMiddle', [
        state('open', style({
            opacity: 0,
        })),
        state('close', style({
            opacity: 1
        })),
        transition('open => close', animate('400ms ease-in-out')),
        transition('close => open', animate('400ms ease-in-out'))
    ])

export const burgerOnOffBottom =
    trigger('burgerOnOffBottom', [
        state('open', style({
            transform: 'rotate(134deg) translateX(-1px) translateY(4px)',
            width: '18px'
        })),
        state('close', style({
            transform: 'rotate(0)'
        })),
        transition('open => close', animate('400ms ease-in-out')),
        transition('close => open', animate('400ms ease-in-out')    )
    ])

export const navigationTextOnOff =
    trigger('navigationTextOnOff', [
        state('open', style({
            transform: 'translate3d(0, -36px, 0)',
        })),
        state('close', style({
            transform: 'translate3d(0, 0, 0)',
        })),
        transition('open => close', animate('400ms ease-in-out')),
        transition('close => open', animate('400ms ease-in-out'))
    ])
