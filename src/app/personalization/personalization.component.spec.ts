import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizationComponent } from './personalization.component';

describe('PersonalizationComponent', () => {
  let component: PersonalizationComponent;
  let fixture: ComponentFixture<PersonalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
