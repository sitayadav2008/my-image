import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ImageComponent } from './image/image.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { EditorimageComponent } from './editorimage/editorimage.component';
import { CrudComponent } from './crud/crud.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { from } from 'rxjs';

const redirectToLogin =() => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

// npm install @angular/router
//npm i
const routes: Routes = [

  
   { path:'',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'sign-up',
    component:SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'home',
    component:HomeComponent,
    ...canActivate(redirectToLogin)
  },
  // {
  //   path:'image',
  //   component:ImageComponent
  // },
  
{
  path:'Landing',
  component:LandingComponent,
  ...canActivate(redirectToHome)
},

// {
//   path:'forgot-password'
//   Component:LandingComponent
// },

//  {   
//     path: 'upload-image', component: ImageComponent
// }
// ,

{
  path: 'editor-image',
  component: EditorimageComponent,
  ...canActivate(redirectToHome)
},
{
  path: 'crud',
  component:CrudComponent,
  ...canActivate(redirectToHome)
}


];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
