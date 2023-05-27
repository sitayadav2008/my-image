import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMsg: string = '';

  constructor(
    @Inject(AngularFireAuth) private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  onSignUp() {
    if (!this.validateEmail(this.email)) {
      // Invalid email format
      this.errorMsg = 'Invalid email format';
      return;
    }

    if (this.password !== this.confirmPassword) {
      // Password and confirm password do not match
      this.errorMsg = 'Password and confirm password do not match';
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        console.log('User signed up:', userCredential.user?.email);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.errorMsg = error.message;
        console.error('Error signing up:', error);
      });
  }

  private validateEmail(email: string): boolean {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
