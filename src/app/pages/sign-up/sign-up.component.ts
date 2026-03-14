import {
  ChangeDetectionStrategy,
  Component,
  inject,
  SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { FormGeneratorComponent } from '../../common/components/form-generator/form-generator.component';
import { A11yModule } from '@angular/cdk/a11y';
import { FormConfigType } from '../../model/FormConfig.model';
import { SignUpStore } from '../../store/sign-up.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    FormGeneratorComponent,
    A11yModule,
  ],
  providers: [FormBuilder, provideNativeDateAdapter(), Router],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  signUpStore = inject(SignUpStore);
  generalFormConfig: any[] = [
    {
      title: 'First Name',
      control: 'firstName',
      type: 'text',
      class: 'half',
    },
    {
      title: 'Last Name',
      control: 'lastName',
      type: 'text',
      class: 'half',
    },
    {
      title: 'Address',
      control: 'address',
      type: 'text',
      class: 'full',
    },
    {
      title: 'Email',
      control: 'email',
      type: 'text',
      class: 'one-third',
    },
    {
      title: 'Phone',
      control: 'phone',
      type: 'text',
      class: 'one-third',
    },
    {
      title: 'Date of Birth',
      control: 'dateOfBirth',
      type: 'date-picker',
      class: 'one-third',
    },
  ].map((c, i) => ({ ...c, index: i }));

  paymentFormConfig: FormConfigType[] = [
    {
      title: 'Name on card',
      control: 'nameOnCard',
      type: 'text',
      class: 'half',
    },
    {
      title: 'Credit card number',
      control: 'creditCardNumber',
      type: 'text',
      class: 'half',
    },
    {
      title: 'Expire on',
      control: 'expireOn',
      type: 'date-picker',
      class: 'half',
    },
    {
      title: 'CCV',
      control: 'ccv',
      type: 'text',
      class: 'half',
    },
    {
      title: 'Zip',
      control: 'zip',
      type: 'text',
      class: 'half',
    },
  ].map((c, i) => ({ ...c, index: i }));

  healthFormConfig: FormConfigType[] = [
    {
      title: 'Height',
      control: 'height',
      type: 'text',
      class: 'one-third',
    },
    {
      title: 'Weight',
      control: 'weight',
      type: 'text',
      class: 'one-third',
    },
    {
      title: 'Fat percentage',
      control: 'fatPercentage',
      type: 'text',
      class: 'one-third',
    },
    {
      title: 'Medical History',
      control: 'medicalHistory',
      type: 'chips',
      class: 'full',
      chipList: [
        // Cardiovascular
        'High blood pressure',
        'Heart disease',
        'Arrhythmia',

        // Respiratory
        'Asthma',
        'Chronic bronchitis',
        'Shortness of breath',

        // Metabolic
        'Diabetes',
        'High cholesterol',
        'Gout',

        // Musculoskeletal
        'Herniated disc',
        'Chronic back pain',
        'Knee pain',
        'Shoulder pain',
        'Joint degeneration',
        'Previous injury',

        // Neurological
        'Dizziness',
        'Epilepsy',
        'Balance disorder',

        // Others
        'Allergies',
        'Recent surgery',
        'Currently taking medication',
      ],
    },
    {
      title: 'Nutrition',
      control: 'nutrition',
      type: 'checkbox',
      class: 'full',
      checkboxOptions: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Keto', 'Paleo'],
    },
    {
      title: 'Smoke',
      control: 'smoke',
      type: 'radio-button',
      class: 'full',
      optionList: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  ].map((c, i) => ({ ...c, index: i }));

  targetFormConfig: FormConfigType[] = [
    {
      title: 'Target',
      control: 'target',
      type: 'text',
      class: 'full',
    },
    {
      title: 'Exercise experience',
      control: 'exerciseExperience',
      type: 'text',
      class: 'full',
    },
    {
      title: 'Frequency',
      control: 'frequency',
      type: 'text',
      class: 'full',
    },
  ].map((c, i) => ({ ...c, index: i }));

  generalFormGroup: FormGroup = this._formBuilder.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-zÀ-ỹ\s'-]+$/),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-zÀ-ỹ\s'-]+$/),
      ],
    ],
    address: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250),
        Validators.pattern(/^[A-Za-zÀ-ỹ0-9\s,./#-]+$/),
      ],
    ],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: ['', [Validators.required]],
  });

  paymentFormGroup: FormGroup = this._formBuilder.group({
    nameOnCard: [
      '',
      [
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.pattern(/^[A-Za-zÀ-ỹ\s'-]+$/),
      ],
    ],
    creditCardNumber: [
      '',
      [Validators.minLength(12), Validators.pattern(/^[0-9]+$/)],
    ],
    expireOn: ['', [Validators.required]],
    ccv: [
      '',
      [Validators.minLength(3), Validators.maxLength(3), Validators.required],
    ],
    zip: ['', [Validators.required]],
  });

  healthFormGroup: FormGroup = this._formBuilder.group({
    height: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(3)],
    ],
    weight: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
    ],
    fatPercentage: ['', [Validators.required, Validators.pattern('/^d+$/g')]],
    medicalHistory: ['', [Validators.required]],
    nutrition: ['', [Validators.required]],
    smoke: ['', [Validators.required]],
  });

  targetFormGroup: FormGroup = this._formBuilder.group({
    target: [''],
    exerciseExperience: [''],
    frequency: [''],
  });

  signupForm: FormGroup = this._formBuilder.group({
    general: this.generalFormGroup,
    payment: this.paymentFormGroup,
    health: this.healthFormGroup,
    target: this.targetFormGroup,
  });
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('aaaa', this.generalFormGroup.controls);
  }

  inputChange(): void {
    console.log(this.generalFormGroup);
  }

  isAllControlDirty(form: FormGroup): boolean {
    return Object.values(form.controls).every((control) => control.dirty);
  }

  register(): void {
    this.signUpStore.saveSignUpForm({
      ...this.signupForm.value.general,
    } as any);
    this.router.navigate(['/email_verify']);
  }
}
