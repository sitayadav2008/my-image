import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxCroppedEvent, NgxPhotoEditorService } from 'ngx-photo-editor';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  selectedImage!: File | null;
  selectedImageUrl!: string;

 
 output?:NgxCroppedEvent

 constructor(private service:NgxPhotoEditorService){}

 fileChangeHandler($event:any)
 {
  this.service.open($event,{
    aspectRatio:4/3,
    autoCropArea:1
  }).subscribe((data) =>{
    console.log(data)
    this.output=data
  })
 }
  

  


 }
