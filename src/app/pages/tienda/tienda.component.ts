import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/shared/tienda.service';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public prendas: Prenda[];
  public is_Tatuador: Boolean = true;

  constructor(private router: Router,
    public tiendaService: TiendaService,
    public userService: UserService) {
    this.tiendaService.getAll().subscribe((respuesta: Respuesta) => {
      this.prendas = respuesta.data_prenda;
      
    })
  }
  goAdd() {
    this.router.navigate(['/add-producto'])
  }

  delete(prenda: Prenda) {
    
    this.tiendaService.delete(prenda.id_photo).subscribe((respuesta: Respuesta) => {

      this.prendas = this.prendas.filter(prenda1 => prenda1.id_photo !== prenda.id_photo)
      
    })

  }
  find(id_prenda: HTMLInputElement) {

    if (this.prendas.filter(prenda => prenda.name.includes(id_prenda.value))) {
      this.prendas = this.prendas.filter(prenda => prenda.name.includes(id_prenda.value))
      
    }
    if(id_prenda.value == ""){
      this.tiendaService.getAll().subscribe((respuesta: Respuesta) => {
        this.prendas = respuesta.data_prenda;
        
      })
    }
 
  }

  ngOnInit(): void {

  }

}


