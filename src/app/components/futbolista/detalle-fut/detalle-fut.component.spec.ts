import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFutComponent } from './detalle-fut.component';

describe('DetalleFutComponent', () => {
  let component: DetalleFutComponent;
  let fixture: ComponentFixture<DetalleFutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
