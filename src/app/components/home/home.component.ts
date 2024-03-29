import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ScrollToModule } from 'ng2-scroll-to';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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



  constructor(private router: Router) {}
  

  // scrollToProjects() {
  //   const projectsSection = document.getElementById('projects');
  //   if (projectsSection) {
  //     projectsSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  logout()
  {
    
    this.router.navigate(['/login']);
  }
}
