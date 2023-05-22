import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(@Inject(AngularFireAuth) private afAuth: AngularFireAuth) {}
  email: string = ''; // Define the email property


  password: string = '';

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        console.log('Password reset email sent.');
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}


