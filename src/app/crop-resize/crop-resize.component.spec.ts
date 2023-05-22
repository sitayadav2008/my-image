import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropResizeComponent } from './crop-resize.component';

describe('CropResizeComponent', () => {
  let component: CropResizeComponent;
  let fixture: ComponentFixture<CropResizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropResizeComponent]
    });
    fixture = TestBed.createComponent(CropResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
