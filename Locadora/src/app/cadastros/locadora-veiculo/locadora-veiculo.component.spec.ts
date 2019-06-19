import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraVeiculoComponent } from './locadora-veiculo.component';

describe('LocadoraVeiculoComponent', () => {
  let component: LocadoraVeiculoComponent;
  let fixture: ComponentFixture<LocadoraVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
