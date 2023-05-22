import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetimageServiceService {
  selectedImage: any;

  constructor() { }
  saveImage(canvas: HTMLCanvasElement): void {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'edited_image.png';
    link.click();
  }
}
