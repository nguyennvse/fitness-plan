import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormConfigType } from '../../model/FormConfig.model';
import { FormGeneratorComponent } from '../../common/components/form-generator/form-generator.component';
import { AuthenticationStore } from '../../store/authentication.store';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-profile',
  imports: [FormGeneratorComponent],
  templateUrl: './personal-profile.component.html',
  styleUrl: './personal-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthenticationStore],
})
export class PersonalProfileComponent {
  readonly authenticationStore = inject(AuthenticationStore);
  formGroup!: FormGroup;
  resetFromGroup!: FormGroup;
  formConfig: FormConfigType[] = [
    {
      title: 'First name',
      control: 'firstName',
      type: 'text',
      class: 'w-full',
    },
    {
      title: 'Last Name',
      control: 'lastName',
      type: 'text',
      class: 'w-full',
    },
    {
      title: 'Email',
      control: 'email',
      type: 'text',
      class: 'w-full',
    },

    {
      title: 'Phone',
      control: 'phone',
      type: 'text',
      class: 'w-full',
    },
    {
      title: 'Address',
      control: 'address',
      type: 'text',
      class: 'w-full',
    },
    {
      title: 'Date of Birth',
      control: 'dob',
      type: 'text',
      class: 'w-full',
    },
  ];

  resetPwdConfig: FormConfigType[] = [
    {
      title: 'Current password',
      control: 'currentPwd',
      type: 'text',
      class: 'w-full',
    },
    {
      title: 'New password',
      control: 'newPwd',
      type: 'text',
      class: 'w-full',
    },
    {
      title: 'New confirm password',
      control: 'newConfirmPwd',
      type: 'text',
      class: 'w-full',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: [this.authenticationStore.email()],
      firstName: [this.authenticationStore.firstName()],
      lastName: [this.authenticationStore.lastName()],
      phone: [this.authenticationStore.phone()],
      address: [this.authenticationStore.address()],
      dob: [this.authenticationStore.dateOfBirth()],
    });

    this.resetFromGroup = this.fb.group({
      currentPwd: [''],
      newPwd: [''],
      newConfirmPwd: [''],
    });
  }
}
