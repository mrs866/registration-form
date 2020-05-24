import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentDetailComponent } from './depatment-detail.component';

describe('DepatmentDetailComponent', () => {
  let component: DepatmentDetailComponent;
  let fixture: ComponentFixture<DepatmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
