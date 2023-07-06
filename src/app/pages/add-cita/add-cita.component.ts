import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/shared/cita.service';
import { Cita } from 'src/app/models/cita';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent {
  cita: Cita = new Cita();
  usuario: User

  constructor(
    private router: Router,
    private citaService: CitaService,
    private userService: UserService
  ) {}
}