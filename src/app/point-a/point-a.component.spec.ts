import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAComponent } from './point-a.component';

describe('PointAComponent', () => {
  let component: PointAComponent;
  let fixture: ComponentFixture<PointAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
