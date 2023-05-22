import { Component, OnInit } from '@angular/core';
import { NgxCroppedEvent, NgxPhotoEditorService } from 'ngx-photo-editor';
import { GetimageServiceService } from '../getimage.service.service';

@Component({
  selector: 'app-crop-resize',
  templateUrl: './crop-resize.component.html',
  styleUrls: ['./crop-resize.component.css']
})
export class CropResizeComponent implements OnInit {
  selectedImage: any;
  selectedImageUrl: string | null = null;
  croppedImage: string | null = null;

  constructor(
    private photoEditorService: NgxPhotoEditorService,
    private imageService: GetimageServiceService
  ) {}

  ngOnInit(): void {
    this.selectedImage = this.imageService.selectedImage;
  }

  fileChangeHandler(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageService.selectedImage = file;
      this.selectedImage = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImageUrl = e.target!.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  rotateLeft() {
    console.log("Rotate Left");
  }

  rotateRight() {
    console.log("Rotate Right");
  }

  crop() {
    console.log("Crop");
  }

  reset() {
    this.selectedImage = null;
    this.selectedImageUrl = null;
    this.croppedImage = null;
  }

  save() {
  }
}
