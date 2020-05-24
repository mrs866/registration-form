import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildcounterComponent } from './viewchildcounter.component';

describe('ViewchildcounterComponent', () => {
  let component: ViewchildcounterComponent;
  let fixture: ComponentFixture<ViewchildcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
