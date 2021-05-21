import { state, transition, trigger, style, animate, useAnimation } from '@angular/animations';
import { jackInTheBox, rotateIn } from 'ng-animate';
export const FormAnimation=[
  trigger('submitForm', [
    state('submitted', style({})),
    transition('*=>submitted', useAnimation(jackInTheBox))
  ])
]
