import { Component } from '@angular/core';
import { Opinion } from 'src/app/models/opinion';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent {
 
  opiniones: any[] = [];
  showInput: boolean[] = [];

  showResponseInput(index: number) {
    this.showInput[index] = true;
  }


 
  public opiniones2: Opinion[]

  constructor(){
    this.opiniones = [
      // new Opinion(1, "Alba Carranza", "/assets/chat-registro/albaricoque.png", 0, "Joe como pincha el Rober!"),
      // new Opinion(2, "Leo", "/assets/chat-registro/leo.png", 0, "Joe como pincha el Rober!"),
      new Opinion(3, "Dani", "/assets/chat-registro/dani.png", 0, "Chacho increíble!!"),
      // new Opinion(4, "MariTere", "/assets/chat-registro/maritere.png", 0, "Joe como pincha el Rober!"),
      // new Opinion(5, "alex", "/assets/chat-registro/alex.png", 0, "Joe como pincha el Rober!")


    ]
  }
}
