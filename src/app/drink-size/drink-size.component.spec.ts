import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSizeComponent } from './drink-size.component';

describe('DrinkSizeComponent', () => {
  let component: DrinkSizeComponent;
  let fixture: ComponentFixture<DrinkSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
