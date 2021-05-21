import { trigger, transition, style, animate, state } from '@angular/animations';
export const BasketIcon = [
  trigger('matBadge',[
      transition(':increment, :decrement', animate(700,style({
        color: 'green',
        transform: 'scale(1.2)'
      })))
  ])
]
