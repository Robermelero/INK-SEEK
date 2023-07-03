import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public prendas: Prenda[];
  public isTatuador: Boolean = true;

  constructor(private router: Router) {
    this.prendas = [
      new Prenda(1, "Skull shirt", "/assets/images/image 1.png"),
      new Prenda(2, "Rose shirt", "/assets/images/image 2.png"),
      new Prenda(3, "Beige shirt", "/assets/images/image 3.png"),
      new Prenda(4, "Green shirt", "/assets/images/image 4.png")
    ];
  }
  goAdd(){
    this.router.navigate(['/add-producto'])
  }
  quitarCaja(){
  }
  ngOnInit(): void {}
}
