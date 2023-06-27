import { Component, OnInit, Input } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{
  @Input() prenda: Prenda;

  constructor(){}

  ngOnInit(): void{} 
}
