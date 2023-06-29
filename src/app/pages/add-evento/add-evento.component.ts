import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent {

  constructor(private router: Router) {}
  
  goTablon(){
    this.router.navigate(['/tablon'])
  }

}
