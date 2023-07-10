import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/shared/cita.service';
import { Cita } from 'src/app/models/cita';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.css']
})
export class ModificarCitaComponent implements OnInit {
  cita: Cita = {
    id_cita: 0,
    asunto: '',
    email: '',
    fecha: '',
    hora: '',
    name: '',
    last_name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citaService: CitaService,
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const citaId = params.get('id');
      if (citaId) {
        this.obtenerCita(parseInt(citaId));
      } else {
        console.log('No se proporcionó un ID de cita válido');
      }
    });
  }

  obtenerCita(citaId: number): void {
    this.citaService.getCitaById(citaId).subscribe(
      (response: any) => {
        console.log('Response obtenerCita:', response);
        if (!response.error) {
          const citaData = response.data_cita;
          if (citaData) {
            const citaModificada: Cita = {
              id_cita: citaData.id_cita,
              asunto: citaData.asunto,
              email: citaData.email,
              fecha: citaData.fecha,
              hora: citaData.hora,
              name: citaData.name,
              last_name: citaData.last_name
            };
            console.log('Cita modificada:', citaModificada);
            this.cita = citaModificada;
          } else {
            console.log('No se encontró la cita con el ID:', citaId);
          }
        } else {
          console.log('Error al obtener la cita:', response.mensaje);
        }
      },
      (error) => {
        console.log('Error al obtener la cita:', error);
      }
    );
  }
  
  guardarCambios(): void {
    console.log('ID de cita:', this.cita.id_cita);
    console.log('Cita a modificar:', this.cita);

    const fechaAjustada = new Date(this.cita.fecha);
    fechaAjustada.setDate(fechaAjustada.getDate() + 1);
    this.cita.fecha = fechaAjustada.toISOString();

    this.citaService.updateCita(this.cita).subscribe(
      (response: any) => {
        console.log('Response guardarCambios:', response);
        if (!response.error) {
          console.log('Cita actualizada correctamente.');
          this.router.navigate(['/calendario']);
        } else {
          console.log('Error al actualizar la cita:', response.mensaje);
        }
      },
      (error) => {
        console.log('Error al actualizar la cita:', error);
      }
    );
  }

  eliminarCita(): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
      this.citaService.deleteCita(this.cita.id_cita).subscribe(
        (response: any) => {
          console.log('Response eliminarCita:', response);
          if (!response.error) {
            console.log('Cita eliminada correctamente.');
            this.router.navigate(['/calendario']);
          } else {
            console.log('Error al eliminar la cita:', response.mensaje);
          }
        },
        (error) => {
          console.log('Error al eliminar la cita:', error);
        }
      );
    }
  }
}
