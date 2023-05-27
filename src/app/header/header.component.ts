import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {





  constructor(private router: Router) {}
  logout() {
   
    this.router.navigate(['/login']);
  }

  home()
  {
    this.router.navigate(['/home']);
  }


  @ViewChild('hamburger') hamburgerRef!: ElementRef;
  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef;
  @ViewChild('header') headerRef!: ElementRef;
  
  ngOnInit(): void {
    if (this.hamburgerRef && this.mobileMenuRef && this.headerRef) {
      this.hamburgerRef.nativeElement.addEventListener('click', () => {
        this.hamburgerRef.nativeElement.classList.toggle('active');
        this.mobileMenuRef.nativeElement.classList.toggle('active');
      });
    }
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
