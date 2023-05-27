import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorimageComponent } from './editorimage.component';

describe('EditorimageComponent', () => {
  let component: EditorimageComponent;
  let fixture: ComponentFixture<EditorimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorimageComponent]
    });
    fixture = TestBed.createComponent(EditorimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
