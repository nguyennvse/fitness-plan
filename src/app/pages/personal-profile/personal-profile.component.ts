import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personal-profile',
  imports: [],
  templateUrl: './personal-profile.component.html',
  styleUrl: './personal-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalProfileComponent {
  samplePerson = {
    email: 'nguyennvse@gmail.com',
    firstName: 'Nguyen',
    lastName: 'Nguyen Vinh',
    address: '123 Ly Thuong Kiet, Phuong Tan Hoa, HCM',
    phone: '09123456',
    dateOfBirth: '12032000',
  };
}
