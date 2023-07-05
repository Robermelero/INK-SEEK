import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/shared/tienda.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public prendas: Prenda[];
  public is_Tatuador: Boolean = true;

  constructor(private router: Router,
              public tiendaService : TiendaService) {
    this.tiendaService.getAll().subscribe((respuesta :Respuesta)=>{
      this.prendas = respuesta.data_prenda
    })
  }
  goAdd(){
    this.router.navigate(['/add-producto'])
  }
  quitarCaja(){
  }
  ngOnInit(): void {}
}
