import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Inject } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth/firebase';
// import { auth } from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password :new FormControl('', Validators.required)
    
  // })


  email: string = '';
  password: string = '';

  

  constructor(@Inject(AngularFireAuth) private afAuth: AngularFireAuth, private router: Router) {}


  [x: string]: any;
  showSignup = false;
  showimage: any;
  errorMsg!: string;

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
    .then(userCredential => {
      console.log('User logged in:', userCredential.user?.email);
      this.router.navigate(['/image']);
      this.showimage = true; // set showCrud to true
    })
    .catch(error => {
      this.errorMsg = error.message;
      console.error('Error logging in:', error);
    });
  }
  
    loginWithGoogle() {
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(userCredential => {
      const email = userCredential.user?.email; // Get the email from user credential
      console.log('User logged in with Google:', email);
      this.router.navigate(['/image']);
    })
    .catch(error => {
      this.errorMsg = error.message;
      console.error('Error logging in with Google:', error);
    });
    }
    
}
  


