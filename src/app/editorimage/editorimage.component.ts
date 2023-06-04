import { Component, ElementRef, ViewChild ,OnInit} from '@angular/core';
import { NgxCroppedEvent, NgxPhotoEditorService } from 'ngx-photo-editor';
import { GetimageServiceService } from '../getimage.service.service';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { finalize } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire/compat';
import { FirebaseStorage } from 'firebase/storage';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask,  } from '@angular/fire/compat/storage';
import { Firestore, collection, addDoc, collectionData ,doc , updateDoc, deleteDoc, DocumentReference} from '@angular/fire/firestore';
import { Observable, finalize } from 'rxjs';

import { UploadTaskSnapshot } from 'firebase/storage';
// import { Observable } from 'rxjs';
// import { base64ToFile } from '';

@Component({
  selector: 'app-editorimage',
  templateUrl: './editorimage.component.html',
  styleUrls: ['./editorimage.component.css']
})
export class EditorimageComponent {


  
  constructor(private storage: AngularFireStorage,private firestore: Firestore) {}



  

  
  

  
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
    console.log(event.base64, event)


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

  isDarkMode: boolean = false;
  isLoggedIn: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const footer = document.querySelector('.footer');
  if (footer) {
    footer.classList.toggle('dark-mode');
  }
  const leftContainer = document.querySelector('.left-container');
  if (leftContainer) {
    leftContainer.classList.toggle('dark-mode');
  }
  const body = document.querySelector('body');
  
  const myDiv = document.querySelector('.my-div');
  if (body) {
    body.classList.toggle('dark-mode');
  }
  if (myDiv) {
    myDiv.classList.toggle('dark-mode');
  }
}

 
  navigateToLogin() {
    // this.router.navigate(['/login']);
  }


  
  // saveImage() {  if (this.croppedImage) {
  //   // Convert the base64 data to a Blob
  //   const byteCharacters = atob(this.croppedImage.split(',')[1]);
  //   const byteArrays = [];
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteArrays.push(byteCharacters.charCodeAt(i));
  //   }
  //   const byteArray = new Uint8Array(byteArrays);
  //   const blob = new Blob([byteArray], { type: 'image/jpeg' });

  //   // Generate a unique file name
  //   const fileName = `cropped_image_${new Date().getTime()}.jpg`;

  //   // Upload the image to Firebase Storage
  //   const storageRef = this.storage.ref(fileName);
  //   const uploadTask = storageRef.put(blob);

  //   // Listen to upload progress and completion
  //   uploadTask.snapshotChanges().subscribe(
  //     (snapshot) => {
  //       if (snapshot) {
  //         // Handle progress updates if snapshot exists
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log(`Upload progress: ${progress}%`);
  //       }
  //     },
  //     (error) => {
  //       // Handle upload error
  //       console.error('Upload error:', error);
  //     },
  //     () => {
  //       // Handle upload completion
  //       storageRef.getDownloadURL().subscribe((downloadURL) => {
  //         console.log('Cropped Image URL:', downloadURL);
  //         // Perform further actions with the download URL
  //         // You can save the URL to a database or use it as needed
  //       });
  //     }
  //   );
  // } else {
  //   console.log('No cropped image available.');
  // }}
   


  
  saveImage() {
    const collectionInstance = collection(this.firestore, 'images');
    if (this.croppedImage) {
      // Convert the base64 data to a Blob
      const byteCharacters = atob(this.croppedImage.split(',')[1]);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      const byteArray = new Uint8Array(byteArrays);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
  
      const fileName = `cropped_image_${new Date().getTime()}.jpg`;
  
      
      const storageRef = this.storage.ref(fileName);
      const uploadTask = storageRef.put(blob);
  
      
      uploadTask.snapshotChanges().subscribe(
        (snapshot) => {
          if (snapshot) {
            
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress}%`);
          }
        },
        (error) => {
          console.error('Upload error:', error);
        },
        () => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            console.log('Cropped Image URL:', downloadURL);
            
            
            const imageData = { url: downloadURL };
            addDoc(collectionInstance, imageData)
              .then(() => {
                console.log('Image stored in Firestore');
              
              })
              .catch((error) => {
                console.error('Error storing image in Firestore:', error);
              });
          });
        }
      );
    } else {
      console.log('No cropped image available.');
    }
  }
  


}
