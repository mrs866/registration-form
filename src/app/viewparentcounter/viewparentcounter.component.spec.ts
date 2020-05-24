import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparentcounterComponent } from './viewparentcounter.component';

describe('ViewparentcounterComponent', () => {
  let component: ViewparentcounterComponent;
  let fixture: ComponentFixture<ViewparentcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewparentcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparentcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
