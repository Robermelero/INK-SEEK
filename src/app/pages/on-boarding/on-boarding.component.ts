
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent implements OnInit{
  images= [
    {src:"assets/onboard/onboardhome/01.png", text:""},//0
    {src:"assets/onboard/onboardhome/presenta.png", text:""},//2
    {src:"assets/onboard/onboardhome/presenta.png", text:""},//4
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png", text:""},//6
    {src:"assets/onboard/onboardhome/profile-txt.png", text:""},//8
    {src:"assets/onboard/onboardhome/profile-txt.png", text:""},//10
    {src:"assets/onboard/onboardhome/perfil.png", text:""},//12
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png", text:""},//14
    {src:"assets/onboard/onboardhome/calendario-txt.png", text:""},//16
    {src:"assets/onboard/onboardhome/calendario-txt.png", text:""},//18
    {src:"assets/onboard/onboardhome/calendario.png", text:""},//20
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png", text:""},//22
    {src:"assets/onboard/onboardhome/descubre-txt.png", text:""},//24
    {src:"assets/onboard/onboardhome/descubre-txt.png", text:""},//26
    {src:"assets/onboard/onboardhome/descubrir.png", text:""},//28
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png", text:""},//30
    {src:"assets/onboard/onboardhome/publica-txt.png", text:""},//32
    {src:"assets/onboard/onboardhome/publica-txt.png", text:""},//34
    {src:"assets/onboard/onboardhome/subir foto.png", text:""},//36
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png", text:""},//38
    {src:"assets/onboard/onboardhome/eventos-txt.png", text:""},//40
    {src:"assets/onboard/onboardhome/eventos-txt.png", text:""},//42
    {src:"assets/onboard/onboardhome/eventos.png", text:""},//44
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png", text:""},//46
    {src:"assets/onboard/onboardhome/chat-txt.png", text:""},//48
    {src:"assets/onboard/onboardhome/chat-txt.png", text:""},//50
    {src:"assets/onboard/onboardhome/chat.png", text:""},//52
    
    {src:"assets/onboard/onboardhome/Home onboard transicion blur.png",text:""},//54
    {src:"assets/onboard/onboardhome/burgertxt.png", text:""},//56
    {src:"assets/onboard/onboardhome/burgertxt.png", text:""},//58
    {src:"assets/onboard/onboardhome/burger.png", text:""},//60
  ]; 
  currentIndex= 0
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 2000); // Cambia el duración que deseas entre cada transición en milisegundos
  }
}
