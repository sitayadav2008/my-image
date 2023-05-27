import * as firebase from 'firebase/compat';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// import { MatMenuModule } from '@angular/material/menu';
// import MenuIcon from '@mui/icons-material/Menu';


import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { TestongComponent } from './testong/testong.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CropResizeComponent } from './crop-resize/crop-resize.component';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ImageEditorModel } from '@syncfusion/ej2-angular-image-editor';
import { ImageEditorModule, } from '@syncfusion/ej2-angular-image-editor';
import { ImageEditorComponent } from './image-editor/image-editor.component';
// import { fabric} from 'fabric'

import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';

import {NgxImageEditorModule} from "ngx-image-editor";

import { ImageCropperModule } from 'ngx-image-cropper';
import {ImageViewerModule} from 'ngx-image-viewer';
import { CanvasComponent } from './canvas/canvas.component';
import { EditorimageComponent } from './editorimage/editorimage.component'
// import { ImageCropperModule } from 'angular-image-cropper';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CrudComponent } from './crud/crud.component';
import { HeaderComponent } from './header/header.component';

// import { ImageCropperComponent } from 'ngx-image-cropper';


// import { ScrollToModule } from 'ng2-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TestongComponent,
    LandingComponent,
    
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CropResizeComponent,
    ImageEditorComponent,
    CanvasComponent,
    EditorimageComponent,
    CrudComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageEditorModule,
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatIconModule,
    AuthModule,
    NgxPhotoEditorModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    RichTextEditorModule,
    FileManagerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([]),
    
  
    MatToolbarModule,
    AngularFireStorageModule,
    ImageCropperModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent, CropResizeComponent]
})
export class AppModule { }
