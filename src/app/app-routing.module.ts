import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { CropResizeComponent } from './crop-resize/crop-resize.component';

const routes: Routes = [

  
   { path:'',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'image',
    component:ImageComponent
  },
  
{
  path:'Landing',
  component:LandingComponent
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
  path:'crop&resize',
  component:CropResizeComponent
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
