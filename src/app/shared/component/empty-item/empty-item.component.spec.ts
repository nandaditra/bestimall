import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyItemComponent } from './empty-item.component';

describe('EmptyItemComponent', () => {
  let component: EmptyItemComponent;
  let fixture: ComponentFixture<EmptyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyItemComponent]
    });
    fixture = TestBed.createComponent(EmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
