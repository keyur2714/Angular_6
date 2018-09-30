import { trigger,state,style,transition,keyframes,animate } from '@angular/animations';
export const STATE_CHANGE_ANIMATION = trigger(
    "stateChange",
    [
		state('start', style({
          backgroundColor: 'red',
		  transform: 'translateX(0)'
        })),
        state('inProgress', style({
          backgroundColor: 'green',
		  transform: 'translateX(50%)'
		})),
		state('stop',   style({
		  backgroundColor: 'blue',
		  transform: 'translateX(100%)'
        })),
        transition('start => inprogress',
        animate('9s ease-in',
        keyframes([ 
                style({width: '110px',height: '110px', backgroundColor: 'yellow', offset: '0.1s' }),
	            style({width: '120px',height: '120px', backgroundColor: 'green', offset: '0.2s' }),
	            style({width: '100px',height: '100px', backgroundColor: 'blue', offset: '0.5s' })
            ])
        )),
        transition('inprogress => stop',animate('3s ease-out')),        
    ]);