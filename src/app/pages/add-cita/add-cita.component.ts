import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from '../../shared/cita.service';
import { Cita } from '../../models/cita';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent {
  cita: Cita = new Cita();
  clienteId: number;
  public user: User;
  public idTatuador: number;

  constructor(private router: Router, private citaService: CitaService, private userService: UserService) {
    this.idTatuador = this.userService.user.id_user;
  }

  agregarCita() {
    const emailCliente = this.cita.email;
    this.userService.obtenerIdCliente(emailCliente).subscribe(
      (idCliente: number) => {
        if (idCliente) {
          this.guardarCita(this.idTatuador, idCliente.toString());
        } else {
          console.log('No se encontró el cliente con el correo electrónico especificado');
        }
      },
      error => {
        console.log('Error al obtener el ID del cliente:', error);
      }
    );
  }

  guardarCita(idTatuador: number, idCliente: string) {
    this.cita.id_user = idTatuador;
    this.cita.email = idCliente;
    this.citaService.addCita(this.cita).subscribe(
      response => {
        console.log('Cita agregada con éxito');
        this.router.navigate(['/calendario']);
      },
      error => {
        console.log('Error al agregar la cita:', error);
      }
    );
  }
}