import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestongComponent } from './testong.component';

describe('TestongComponent', () => {
  let component: TestongComponent;
  let fixture: ComponentFixture<TestongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestongComponent]
    });
    fixture = TestBed.createComponent(TestongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
