import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparentColorComponent } from './viewparent-color.component';

describe('ViewparentColorComponent', () => {
  let component: ViewparentColorComponent;
  let fixture: ComponentFixture<ViewparentColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewparentColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
