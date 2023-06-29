import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor (private router: Router) {}
  goProfile(){
    this.router.navigate(['/edit-profile-user'])
  }

}
