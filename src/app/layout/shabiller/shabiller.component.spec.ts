import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabillerComponent } from './shabiller.component';

describe('ShabillerComponent', () => {
  let component: ShabillerComponent;
  let fixture: ComponentFixture<ShabillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShabillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShabillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
