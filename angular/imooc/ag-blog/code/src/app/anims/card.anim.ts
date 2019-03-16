import { trigger, state, transition, style, animate } from '@angular/animations'

export const cardAnim = trigger('card',[
  state('out', style({'transform': 'scale(1)'})),
  state('hover', style({'transform': 'scale(1.01)'})),
  transition('out => hover', animate(10)),
  transition('hover => out', animate(10)),
]);
