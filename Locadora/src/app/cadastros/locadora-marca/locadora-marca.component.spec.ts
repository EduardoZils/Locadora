import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraMarcaComponent } from './locadora-marca.component';

describe('LocadoraMarcaComponent', () => {
  let component: LocadoraMarcaComponent;
  let fixture: ComponentFixture<LocadoraMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
