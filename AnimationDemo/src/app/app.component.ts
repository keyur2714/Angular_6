import { Component, HostBinding } from '@angular/core';
import { STATE_CHANGE_ANIMATION } from './animations/state-change.animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    STATE_CHANGE_ANIMATION,
    ON_OFF_2_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AppComponent {
  title = 'Animation Demo';
  state: string = 'start';
  onOffState: string = 'on';
  friendsName = ["keyur","denish","vinit"];

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute'; 

  toggleState(){
    this.state = this.state === 'start' ? 'stop' : 'start';
  }

  start(){
    this.state = "start";
  }
  inProgress(){
    this.state = "inProgress";
  }
  stop(){
    this.state = "stop";
  }

  toggleRowState(){
    this.state = this.state == 'start' ? 'stop' : 'start';
    this.onOffState = this.onOffState == 'on' ? 'off' : 'on';
  }
}
