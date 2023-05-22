import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { Popup } from '@syncfusion/ej2-angular-popups';
// import { Popup, AnimationSettingsModel } from '@syncfusion/ej2-popups';
import { AnimationSettings } from '@syncfusion/ej2-popups';
import { ImageTransform , ImageCroppedEvent,  } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})



export class ImageEditorComponent implements AfterViewInit {
 

  isDarkMode: boolean = false;
  isLoggedIn: boolean = false;
  constructor(private renderer: Renderer2) {}


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

 
  navigateToLogin() {
    // this.router.navigate(['/login']);
  }

  logout() {
   
    console.log('Logged out');
  }

  dropdownOpen = false;
  selectedImage: string = '';
  selectedCropOption: string = '';

  @ViewChild('selectedImageElement', { static: false },)
  selectedImageElement!: ElementRef<HTMLImageElement>;
  @ViewChild('dropdownButton', { static: false })
  dropdownButton!: ElementRef<HTMLButtonElement>;
  
  @ViewChild('dropdownPopup', { static: false })
  dropdownPopup!: Popup;

  
  ngAfterViewInit() {
    if (this.selectedImageElement) {
      this.selectedImageElement.nativeElement.addEventListener('load', () => {
        // Perform necessary actions after the image is loaded
        // For example, you can access the image dimensions here
        const imageWidth = this.selectedImageElement.nativeElement.width;
        const imageHeight = this.selectedImageElement.nativeElement.height;
        console.log('Image Dimensions:', imageWidth, imageHeight);
      });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  toggleDropdown() {
    this.dropdownPopup.show({
      // popupElement: this.dropdownButton.nativeElement,
      // animationSettings: { name: undefined } as unknown as AnimationSettings,
    });
  }
  
  select(cropOption: string) {
    this.selectedCropOption = cropOption;
    this.dropdownPopup.hide();
  }

  crop() {
    if (this.selectedCropOption) {
      const imageElement = this.selectedImageElement.nativeElement;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        console.error('Canvas context is null');
        return;
      }

      canvas.width = imageElement.width;
      canvas.height = imageElement.height;

      let x = 0;
      let y = 0;
      let width = imageElement.width;
      let height = imageElement.height;

      switch (this.selectedCropOption) {
        case 'circle':
          const radius = Math.min(width, height) / 2;
          const centerX = x + width / 2;
          const centerY = y + height / 2;

          context.beginPath();
          context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          context.closePath();
          context.clip();

          break;
        case 'square':
          const size = Math.min(width, height);
          x = (width - size) / 2;
          y = (height - size) / 2;
          width = size;
          height = size;

          break;
        case 'custom':
          break;
      }

      context.drawImage(imageElement, x, y, width, height, 0, 0, canvas.width, canvas.height);

      const croppedImage = canvas.toDataURL('image/jpeg');

      console.log('Cropped Image:', croppedImage);

      console.log('Crop successful');
    } else {
      console.log('No crop option selected');
    }
  }
}
