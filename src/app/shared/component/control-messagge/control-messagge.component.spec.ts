import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMessaggeComponent } from './control-messagge.component';

describe('ControlMessaggeComponent', () => {
  let component: ControlMessaggeComponent;
  let fixture: ComponentFixture<ControlMessaggeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlMessaggeComponent]
    });
    fixture = TestBed.createComponent(ControlMessaggeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
