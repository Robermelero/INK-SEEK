import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isTatuador: boolean = true;

  // constructor() {

  //   let userType = AuthenticationService.getUserType(); 

  //   this.isTatuador = userType === 'tatuador';
  // }
}
