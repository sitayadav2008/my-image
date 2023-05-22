import { Component } from '@angular/core';
import { NgxCroppedEvent, NgxPhotoEditorService } from 'ngx-photo-editor';

// import { Uppy } from '@uppy/core';
// import ImageEditor from '@uppy/image-editor';
// import { LocalStorage } from '@uppy/store-local';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { GetimageServiceService } from '../getimage.service.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  constructor(private imageService: GetimageServiceService,
    private afAuth: AngularFireAuth,
    private router: Router) { }

  selectedImage: File | null = null;
  // selectedImageUrl: string = '';


  onImageSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      this.selectedImage = files[0];
    }
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
}

 
  navigateToLogin() {
    this.router.navigate(['/login']);
  }


  
  uploadImage() {
  }

  cropResize() {
  }

  applyFilter() {
  }

  update() {
  }




  // fileChangeHandler(event: any){
  //   const selectedImage = event.target.files[0];
  //   this.imageService.selectedImage = selectedImage;
  // }
 
}
