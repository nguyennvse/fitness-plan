import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProgressionComponent } from './personal-progression.component';

describe('PersonalProgressionComponent', () => {
  let component: PersonalProgressionComponent;
  let fixture: ComponentFixture<PersonalProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
