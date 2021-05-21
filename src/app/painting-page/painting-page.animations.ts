

import { trigger, transition, useAnimation, group, style, animate, query, state } from '@angular/animations';
import { fadeIn, fadeOut, slideInLeft, slideOutRight } from 'ng-animate';
export const FadeShow = [
  trigger('fadeIn', [
    transition('* => *', useAnimation(fadeIn, {
    params:{
      timing: 0.3,
    }
  })),
])
];

export const SlideContent = [

  trigger('divSlider', [
    state('1',style({
      transform: 'translate3d(0%, 0px, 0px)'
    })),
    state('2',style({
      transform: 'translate3d(-33%, 0px, 0px)'
    })),
    state('3',style({
      transform: 'translate3d(-66%, 0px, 0px)'
    })),

    transition('1=>2', animate(500, style({
      transform: 'translate3d(-33%, 0px, 0px)'
    }))),
    transition('1=>3', animate(500, style({
      transform: 'translate3d(-66%, 0px, 0px)'
    }))),
    transition('2=>3', animate(500, style({
      transform: 'translate3d(-66%, 0px, 0px)'
    }))),
    transition('2=>1', animate(500, style({
      transform: 'translate3d(0%, 0px, 0px)'
    }))),
    transition('3=>1', animate(500, style({
      transform: 'translate3d(0%, 0px, 0px)'
    }))),
    transition('3=>2', animate(500, style({
      transform: 'translate3d(-33%, 0px, 0px)'
    }))),
  ]),
]
