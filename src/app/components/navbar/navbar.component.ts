import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isTatuador: boolean = false;zç
  
  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

  isActiveLink(link: string): boolean {
    return this.activeLink.includes(link);
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
