import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef;
  private video: HTMLVideoElement;
  private mediaStream: MediaStream;

  constructor() {
    this.video = this.videoElement.nativeElement;
  }

  capturePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;
    canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);

    // Aquí puedes enviar la foto a la API REST para guardarla en la base de datos
    const photoDataUrl = canvas.toDataURL('image/jpeg');
    this.uploadPhoto(photoDataUrl);
  }

  uploadPhoto(photoDataUrl: string) {
    // Aquí puedes utilizar una librería o realizar una petición HTTP para enviar la foto a la API REST
    // Puedes enviarla en formato base64 o como un archivo binario, dependiendo de la configuración de tu API REST
  }

  ngAfterViewInit() {
    // Inicia la captura del video al cargar el componente
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.mediaStream = stream;
        this.video.srcObject = stream;
        this.video.play();
      })
      .catch(error => console.error('Error al acceder a la cámara: ', error));
  }

  ngOnDestroy() {
    // Detiene la captura del video al destruir el componente
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
    }
  }
}
