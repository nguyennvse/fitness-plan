import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSubscriptionComponent } from './personal-subscription.component';

describe('PersonalSubscriptionComponent', () => {
  let component: PersonalSubscriptionComponent;
  let fixture: ComponentFixture<PersonalSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
