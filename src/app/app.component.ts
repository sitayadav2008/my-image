import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-image';
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





  
  uploadImage() {
    // Handle upload image logic
  }

  cropResize() {
    // Handle crop and resize logic
  }

  applyFilter() {
    // Handle apply filter logic
  }

  update() {
    // Handle update logic
  }




  
  
}
