import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraIngredientsComponent } from './extra-ingredients.component';

describe('ExtraIngredientsComponent', () => {
  let component: ExtraIngredientsComponent;
  let fixture: ComponentFixture<ExtraIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
