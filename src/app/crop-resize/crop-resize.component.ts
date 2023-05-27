import { Component, ElementRef, ViewChild ,OnInit} from '@angular/core';
import { NgxCroppedEvent, NgxPhotoEditorService } from 'ngx-photo-editor';
import { GetimageServiceService } from '../getimage.service.service';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
// import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire/compat';
import { FirebaseStorage } from 'firebase/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
// import { base64ToFile } from '';

@Component({
  selector: 'app-crop-resize',
  templateUrl: './crop-resize.component.html',
  styleUrls: ['./crop-resize.component.css']
})
export class CropResizeComponent {
    
    title = 'my-image-cropper';
    @ViewChild('myInput') myInputVariable!: ElementRef;
  
    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
  
    fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
    }
    imageLoaded() {
      this.showCropper = true;
    }
    cropperReady(sourceImageDimensions: Dimensions) {
      // cropper ready
      console.log('Cropper ready', sourceImageDimensions);
    }
    loadImageFailed() {
      // show message
      console.log('Load failed');
    }
  
    clear() {
      this.croppedImage = '';
      this.imageChangedEvent = '';
      this.myInputVariable.nativeElement.value = '';
    }
  
    rotateLeft() {
      this.canvasRotation--;
      this.flipAfterRotate();
    }
  
    rotateRight() {
      this.canvasRotation++;
      this.flipAfterRotate();
    }
  
    private flipAfterRotate() {
      const flippedH = this.transform.flipH;
      const flippedV = this.transform.flipV;
      this.transform = {
        ...this.transform,
        flipH: flippedV,
        flipV: flippedH,
      };
    }
  
    flipHorizontal() {
      this.transform = {
        ...this.transform,
        flipH: !this.transform.flipH,
      };
    }
  
    flipVertical() {
      this.transform = {
        ...this.transform,
        flipV: !this.transform.flipV,
      };
    }
  
    resetImage() {
      this.scale = 1;
      this.rotation = 0;
      this.canvasRotation = 0;
      this.transform = {};
    }
  
    zoomOut() {
      this.scale -= 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale,
      };
    }
  
    zoomIn() {
      this.scale += 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale,
      };
    }
  
    toggleContainWithinAspectRatio() {
      this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }
  
    updateRotation() {
      this.transform = {
        ...this.transform,
        rotate: this.rotation,
      };
    }
  
}