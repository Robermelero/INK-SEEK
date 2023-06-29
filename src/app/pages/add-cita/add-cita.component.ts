import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent {
  constructor(private router: Router) {}
  goCalendar(){
    this.router.navigate(['/calendario'])
  }

}