import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('volar', [
      state('inicial', style({
        transform: 'translateY(0)'
      })),
      state('final', style({
        transform: 'translateY(-85vh)'
      })),
      transition('inicial => final', animate('4s 0.5s')),
    ]),
    trigger('aparecer', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate('5s 1.5s')),
    ])
  ]
})
export class LoginComponent {
  email: string;
  password: string;
  
  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/home']);
  }
}


