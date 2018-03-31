import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateBoxesComponent } from './alternate-boxes.component';

describe('AlternateBoxesComponent', () => {
  let component: AlternateBoxesComponent;
  let fixture: ComponentFixture<AlternateBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
