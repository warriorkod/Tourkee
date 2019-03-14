import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiComponent } from './pourquoi.component';

describe('PourquoiComponent', () => {
  let component: PourquoiComponent;
  let fixture: ComponentFixture<PourquoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PourquoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PourquoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
