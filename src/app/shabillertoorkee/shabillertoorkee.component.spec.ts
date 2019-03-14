import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabillertoorkeeComponent } from './shabillertoorkee.component';

describe('ShabillertoorkeeComponent', () => {
  let component: ShabillertoorkeeComponent;
  let fixture: ComponentFixture<ShabillertoorkeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShabillertoorkeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShabillertoorkeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
