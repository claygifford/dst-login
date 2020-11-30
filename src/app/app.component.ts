import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('container', [
      state('right', style({
        transform: 'translateX(100%) translateY(-50%)',
      })),
      state('left', style({
        transform: 'translateX(0%) translateY(-50%)',
      })),
      transition('left => right', [
        animate('1.8s ease-in-out', keyframes([
          style({ transform: 'translateX(0%) translateY(-50%)', offset: 0}),
          style({ transform: 'translateX(100%) translateY(-50%)', offset: 1.0})
        ]))
      ]),
      transition('right => left', [
        animate('1.8s ease-in-out', keyframes([
          style({ transform: 'translateX(100%) translateY(-50%)', offset: 0}),
          style({ transform: 'translateX(0%) translateY(-50%)', offset: 1.0})
        ]))
      ])
    ]),
    trigger('leftPanel', [
      state('open', style({
        transform: 'translateX(0px)',
        opacity: 1
      })),
      state('closed', style({
        transform: 'translateX(-120%)',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.9s 0.6s ease-in-out', keyframes([
          style({ transform: 'translateX(0px)', offset: 0}),
          style({ transform: 'translateX(-120%)', offset: 1.0})
        ])),
        style({ opacity: 0 }),
      ]),
      transition('closed => open', [
        style({ opacity: 1 }),
        animate('0.9s 0.6s ease-in-out', keyframes([
          style({ transform: 'translateX(-120%)', offset: 0}),
          style({ transform: 'translateX(0px)', offset: 1.0})
        ]))
      ]),
    ]),
    trigger('rightPanel', [
      state('open', style({
        transform: 'translateX(0px)',
        opacity: 1
      })),
      state('closed', style({
        transform: 'translateX(120%)',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.9s 0.6s ease-in-out', keyframes([
          style({ transform: 'translateX(0px)', offset: 0}),
          style({ transform: 'translateX(120%)', offset: 1.0})
        ])),
        style({ opacity: 0 }),
      ]),
      transition('closed => open', [
        style({ opacity: 1 }),
        animate('0.9s 0.6s ease-in-out', keyframes([
          style({ transform: 'translateX(120%)', offset: 0}),
          style({ transform: 'translateX(0px)', offset: 1.0})
        ]))
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'dst-login';


  ngOnInit() {
    this.ShuffledMembers = this.shuffle(this.TeamMembers);
    this.GetNextMember();
    this.startTimer();
  }

  get Image() {
    if (this.Member)
      return this.Member.Image;
    return 'assets/log.svg';
  }

  SignIn() {

  }

  LogOut() {

  }

  leftPanelState: string = "open";
  rightPanelState: string = "closed";
  containerState: string = "left";

  OnToggleMode(event: any) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.Mode = !this.Mode;
    if (this.Mode) {
      this.leftPanelState = 'closed';
      this.rightPanelState = 'open';
      this.containerState = 'right';
    } else {
      this.leftPanelState = 'open';
      this.rightPanelState = 'closed';
      this.containerState = 'left';
    }
  }

  timeLeft: number = 60;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      this.GetNextMember();
    }, 15000);
  }

  Mode: any;

  get ModeClass() {
    if (this.Mode) {
      return 'sign-up-mode';
    } else {
      return '';
    }
  }

  shuffle(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  GetPreviousMember() {
    if (this.CurrentMemberIndex <= 0) {
      this.CurrentMemberIndex = this.ShuffledMembers.length;
    } else {
      this.CurrentMemberIndex--;
    }
    this.Member = this.ShuffledMembers[this.CurrentMemberIndex];
  }

  GetNextMember() {
    if (this.CurrentMemberIndex >= this.ShuffledMembers.length - 1) {
      this.CurrentMemberIndex = 0;
    } else {
      this.CurrentMemberIndex++;
    }
    this.Member = this.ShuffledMembers[this.CurrentMemberIndex];
  }
  ShuffledMembers: any;
  CurrentMemberIndex: number = -1;
  Member: any;
  TeamMembers = [
    { Name: 'Tim Shelton', Image: 'assets/demo-1.svg', Color: '#00b0ff' },
    { Name: 'Steve Sobieski', Image: 'assets/demo-2.svg', Color: '#6c63ff' },
    { Name: 'Clay Gifford', Image: 'assets/demo-3.svg', Color: '#f9a826' },
    { Name: 'James Jarvis', Image: 'assets/demo-4.svg', Color: '#f50057' },
    { Name: 'Ken Weeks', Image: 'assets/demo-5.svg', Color: '#00bfa6' },
    { Name: 'Brittany Jameson', Image: 'assets/demo-6.svg', Color: '#67647e' },
    { Name: 'Larry Neal', Image: 'assets/demo-7.svg', Color: '#ff0022' },
    { Name: 'Christine Sanchez', Image: 'assets/demo-8.svg', Color: '#ff00ff' },
    { Name: 'Tracy Knudsen', Image: 'assets/demo-9.svg', Color: '#0064ff' },
    { Name: 'Tom Hill', Image: 'assets/demo-10.svg', Color: '#575a89' },
    { Name: 'Alan Gibbs', Image: 'assets/demo-11.svg', Color: '#c8f926' },
  ];
}
