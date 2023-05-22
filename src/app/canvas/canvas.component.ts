import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
GetimageServiceService
import { GetimageServiceService } from '../getimage.service.service';

@Component({
  selector: 'app-canvas',
  template: `
    <canvas #canvas></canvas>
  `,
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  constructor(private imageService: GetimageServiceService) {}


  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef;
  private context!: CanvasRenderingContext2D;


  ngAfterViewInit() {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
  }
  saveImage(): void {
    this.imageService.saveImage(this.canvasRef.nativeElement);
  }
}
