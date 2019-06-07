import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraListComponent } from './locadora-list.component';

describe('LocadoraListComponent', () => {
  let component: LocadoraListComponent;
  let fixture: ComponentFixture<LocadoraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
