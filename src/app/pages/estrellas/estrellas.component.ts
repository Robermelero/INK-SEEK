import { Component } from '@angular/core';
import { Opinion } from 'src/app/models/opinion';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent {

  opiniones: any[] = [];
  showInput: boolean = false;

  showResponseInput() {
    this.showInput = true;
  }

  public opiniones2: Opinion[]

  constructor(){
    this.opiniones = [
      new Opinion(1, "Alba Carranza", "/assets/chat-registro/albaricoque.png", 0, "Joe como pincha el Rober!"),
     
    ]
  }
}


