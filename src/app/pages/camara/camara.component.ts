import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent {
  @ViewChild('cameraInput', { static: false }) cameraInput: ElementRef;
  @ViewChild('photoImage', { static: false }) photoImage: ElementRef;

  ngAfterViewInit() {
    const camera = this.cameraInput.nativeElement as HTMLInputElement;
    const photo = this.photoImage.nativeElement as HTMLImageElement;
    const open = document.querySelector('#open');

    open.addEventListener('click', function() {
      camera.click();
    });

    camera.addEventListener('change', function(e) {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        photo.src = URL.createObjectURL(file);

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            console.log(xhttp.responseText);
          }
        };

        const formData = new FormData();
        formData.append('photo', file);

        xhttp.open('POST', window.location.href + 'upload', true);
        xhttp.send(formData);
      }
    });
  }
}
