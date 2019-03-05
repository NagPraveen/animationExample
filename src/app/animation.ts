import { animate, state, transition, trigger, stagger, query, style, animateChild, group, keyframes } from '@angular/animations';

export const fade = trigger('fade', [
    state('no', style({ opacity: 0.1 })),
    state('yes', style({ opacity: 1 })),
    transition('* => *', animate('200ms linear'))
]);

export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [
                animate('300ms ease-out', style({ left: '100%' }))
            ], { optional: true }),
            query(':enter', [
                animate('300ms ease-out', style({ left: '0%' }))
            ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
    ])
]);

export const staggeranim = trigger('listAnimation', [
    transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('1000ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
])