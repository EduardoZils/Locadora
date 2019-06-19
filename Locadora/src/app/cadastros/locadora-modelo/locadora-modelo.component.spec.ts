import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraModeloComponent } from './locadora-modelo.component';

describe('LocadoraModeloComponent', () => {
  let component: LocadoraModeloComponent;
  let fixture: ComponentFixture<LocadoraModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
